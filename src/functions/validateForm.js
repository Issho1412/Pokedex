import { Alert } from 'react-native';
const CODE_VALID = {
    VALID: 0,
    EMAIL: 1,
    PWD: 2,
    C_PWD: 3,
    CITY: 4
};

const checkCity = (city) => {
    if (city)
        return CODE_VALID.VALID;
        
    return 4;
};

const showAlert = (code_valid) => {
    if (!code_valid) return;

    switch (code_valid){
        case 4: 
            Alert('The city is not exist.')
            break;
    }
};

export default {
    checkCity,
    showAlert,
}