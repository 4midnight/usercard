import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUserAC, errUserAC, reUserAC } from '../../../store/reducer/userReducer';
import ButtonSubmit from '../../../UI/ButtonSubmit';

interface FormUserAddProps{
    date?: string,
    lName?: string,
    fName?: string, 
    id?: number,
    btn?: string
}

const FormUserAdd: React.FC<FormUserAddProps> = ({date="", lName="", fName="", id, btn=''}) => {
    const [firstName, setFirstName] = useState(fName);
    const [lastName, setLastName] = useState(lName);
    const [birthday, setbirthday] = useState(date);

    const dispath = useDispatch();

    const errorInput = (e: any): void => {
        if (e.target.value.length === 0) {
            e.currentTarget.classList.add("error-input")
        } else {
            e.currentTarget.classList.remove("error-input")
        }
    }


    const fromChangeHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!(firstName && lastName && birthday)) {
            dispath(errUserAC("Error. Fields must not be empty"));

            for (let formInput = 0; formInput < event.target.length; formInput++) {
                if (event.target[formInput].nodeName === "INPUT" && !(event.target[formInput].attributes[3].value)) {
                    event.target[formInput].classList.add('error-input')
                }
            }

            return;
        }

        if(date && fName && lName){
            dispath(reUserAC({
                id: id,
                fName: firstName.charAt(0).toUpperCase() + firstName.slice(1), 
                lName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
                birthday: birthday
            }))

            return;
        }

        dispath(addUserAC({
            id: Math.random() * 10, 
            fName: firstName.charAt(0).toUpperCase() + firstName.slice(1), 
            lName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
            birthday: birthday
        }))
        setFirstName("");
        setLastName("");
        setbirthday("");
    }

    const inputNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        errorInput(event)
        setFirstName(event.target.value);
    }

    const inputLastNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        errorInput(event)
        setLastName(event.target.value)
    }

    const inputBirthdayChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        errorInput(event)
        setbirthday(event.target.value)
    }


    return (
        <form action="" className="user-add__form" onSubmit={fromChangeHandler}>
            <label> First Name :
                <input type="text"
                    className="user-add__input "
                    placeholder='First name'
                    onChange={inputNameChangeHandler}
                    value={firstName} />
            </label>
            <label> Last Name :
                <input type="text"
                    className="user-add__input"
                    placeholder='Last Name'
                    onChange={inputLastNameChangeHandler}
                    value={lastName}
                />
            </label>
            <label> Birthday :
                <input type="date"
                    className="user-add__input"
                    placeholder=''
                    onChange={inputBirthdayChangeHandler}
                    value={birthday}
                />
            </label>


            <ButtonSubmit className="user-btn">{btn ? btn : "Add User"}</ButtonSubmit>
        </form>
    )
}

export default FormUserAdd