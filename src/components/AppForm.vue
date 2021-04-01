<template>
    <div class="app-form">
        <h1>Set up notifications</h1>
        <div class="app-form__email-input">
            <label class="app-form__label">Email address: </label>
            <a-input
                v-model="email"
                class="app-form__email-input__field"
                placeholder="@"
            />
        </div>
        <div class="app-form__new-assets-checkbox">
            <a-checkbox
                v-model="subscribeNewAssets"
            >
                Notify me about new currencies that can be staked on Binance
            </a-checkbox>
        </div>
        <div>
            <div class="app-form__assets-checkbox-group__label">
                Notify me about availability of staking options in following currencies:
            </div>
            <a-checkbox-group
                v-model="assetsIDs"
                @change="assetIDChecked"
                class="app-form__assets-checkbox-group"
            >
                <div
                    v-for="option in options"
                    :key="option.value"
                    class="app-form__assets-checkbox-group__checkbox"
                >
                    <a-checkbox
                        :value="option.value"
                    >
                        {{ option.label }}
                    </a-checkbox>
                </div>
            </a-checkbox-group>
        </div>
        <app-form-submit-button
            :onClick="submitRequest"
            :loading="loading"
        />
    </div>
</template>

<script>

import axios from 'axios';
import { Modal } from 'ant-design-vue';
import config from '../config';

import AppFormSubmitButton from './AppFormSubmitButton.vue';

export default {
    components: {
        AppFormSubmitButton,
    },
    name: 'app-form',
    data() {
        return {
            email: '',
            options: [],
            subscribeNewAssets: false,
            assetsIDs: [],
            loading: false,
        };
    },
    methods: {
        assetIDChecked(checkedValues) {
            console.log('checked = ', checkedValues);
        },
        async submitRequest() {
            try {
                if (!this.emailIsValid(this.email)) {
                    this.warning('Please enter valid email address !');
                    return;
                }

                if (!this.subscribeNewAssets && this.assetsIDs.length === 0) {
                    this.warning('Please select at least something which you will subscribe !');
                    return;
                }

                this.loading = true;

                const parameters = {
                    email: this.email,
                    subscribeNewAssets: this.subscribeNewAssets,
                    subscribedAssetsIDs: this.assetsIDs,
                };

                const url = `${config.apiUrl}/api/subscription/create`;
                const response = await axios.post(url, parameters);

                console.log(response.data);
                this.loading = false;

                this.success();
            } catch (err) {
                this.loading = false;
                this.error();
            }
        },
        success() {
            Modal.success({
                title: 'Success',
                content: (
                    <div>
                        <p>
                            To confirm notification subscription,
                            click on the link in the email we just sent you.
                        </p>
                    </div>
                ),
            });
        },
        error() {
            Modal.error({
                title: 'Error !',
                content: (
                    <div>
                        <p>
                            Something went wrong, please try again later.
                        </p>
                    </div>
                ),
            });
        },
        warning(message) {
            Modal.warning({
                title: message,
            });
        },
        // TODO: check it properly
        emailIsValid(email) {
            if (email.length === 0) {
                return false;
            }
            if (!email.includes('@')) {
                return false;
            }
            return true;
        },
    },
    async created() {
        try {
            const url = `${config.apiUrl}/api/get-staking-info`;
            const response = await axios.get(url);
            const options = response.data.map((asset) => ({
                label: asset.asset_name,
                value: asset.id,
            }));
            options.sort((a, b) => {
                if (a.label < b.label) { return -1; }
                if (a.label > b.label) { return 1; }
                return 0;
            });
            this.options = options;
        } catch (err) {
            console.log(err);
        }
    },
};
</script>

<style scoped>

.app-form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 2.4rem auto 0 auto;
    padding: 2rem 2rem 0 2rem;
    padding: 2rem 2rem;
    background-color: white;
    border-radius: 1.8rem;
}

.app-form__email-input {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.app-form__label {
    margin-right: 1rem;
}

.app-form__email-input__field {
    max-width: 20rem;
}

.app-form__new-assets-checkbox {
    margin-top: 2rem;
}

.app-form__assets-checkbox-group {
    display: flex;
    flex-wrap: wrap;
}

.app-form__assets-checkbox-group__label {
    margin: 2rem 0 1rem 0.2rem;
    text-align: left;
}

.app-form__assets-checkbox-group__checkbox {
    width: 8rem;
    text-align: left;
}

@media screen and (max-width: 600px) {

    .app-form {
        width: 100%;
        border-radius: 0;
    }

    .app-form__assets-checkbox-group__checkbox {
        width: 50%;
    }

    .app-form__email-input {
        margin-top: 2rem;
        flex-direction: column;
        align-items: flex-start;
    }

    .app-form__email-input__field {
        margin-top: 0.2rem;
    }
}

</style>
