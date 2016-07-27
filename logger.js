/**
 * Created by knggroup on 26.7.2016 г..
 */
let checkName = (firstName, lastName) => {
    if(firstName !== 'niki' || lastName !== 'kovachev'){
        console.log('You are not niki kovachev');
    }else{
        console.log('You are niki kovachev');
    }
};
checkName('niki','kovachev');