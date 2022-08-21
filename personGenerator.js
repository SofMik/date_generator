const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {  
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Екатерина",
            "id_3": "Инна",
            "id_4": "Наталья",
            "id_5": "Ирина",
            "id_6": "Мария",
            "id_7": "Александра",
            "id_8": "Надежда",
            "id_9": "Лариса",
            "id_10": "Анастасия"
        }
    }`,

    secondNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Иванович",
            "id_2": "Ильич",
            "id_3": "Петрович",
            "id_4": "Федорович",
            "id_5": "Михайлович",
            "id_6": "Васильевич",
            "id_7": "Александрович",
            "id_8": "Сергеевич",
            "id_9": "Андреевич",
            "id_10": "Егорович"
        }
    }`,

    secondNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ивановна",
            "id_2": "Ильнична",
            "id_3": "Петровна",
            "id_4": "Федоровна",
            "id_5": "Михайловна",
            "id_6": "Васильевна",
            "id_7": "Александровна",
            "id_8": "Сергеевна",
            "id_9": "Андреевна",
            "id_10": "Егоровна"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "писатель",
            "id_2": "строитель",
            "id_3": "менеджер",
            "id_4": "грузчик",
            "id_5": "профессор",
            "id_6": "водитель",
            "id_7": "адвокат",
            "id_8": "летчик",
            "id_9": "плиточник",
            "id_10": "дворник"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "адвокат",
            "id_2": "врач",
            "id_3": "учитель",
            "id_4": "продавец",
            "id_5": "парикмахер",
            "id_6": "менеджер",
            "id_7": "стоматолог",
            "id_8": "секретарь",
            "id_9": "следователь",
            "id_10": "стюардесса"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    GENDER_MALE: 'мужчина',
    GENDER_FEMALE: 'женщина',

    randomGender: function() {
        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        if (this.person.gender ==  this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } 
        else {
            return this.randomValue(this.firstNameFemaleJson);
        };
    },
   
    randomSurname: function() {
        if (this.person.gender ==  this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } 
        else {
            return this.randomValue(this.surnameJson)+'a';
        };
    },

    randomSecondName: function() {
        if (this.person.gender ==  this.GENDER_MALE) {
            return this.randomValue(this.secondNameMaleJson);
        } 
        else {
            return this.randomValue(this.secondNameFemaleJson);
        };
    },

    randomProfession: function() {
        if (this.person.gender ==  this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } 
        else {
        return this.randomValue(this.professionFemaleJson);
        };
    },
   
    randomBirthMonth: function() {
        return this.randomValue(this.birthMonthJson);    
    },
    
    getData: function () {
        /*пыталась объединить через ||, но с или не работает, 
        останавливается на первом варианте с или, я так и не поняла почему? можете объяснить?*/
        if (this.person.birthMonth === "января"){
            this.person.birthDay = this.randomBirthDay3();
            }
        else if (this.person.birthMonth === "февраля"){
            this.person.birthDay = this.randomBirthDay1();
            } 
        else if (this.person.birthMonth === "марта"){
            this.person.birthDay = this.randomBirthDay3();
            } 
        else if (this.person.birthMonth === "апреля"){
            this.person.birthDay = this.randomBirthDay2();
            } 
        else if (this.person.birthMonth === "мая"){
            this.person.birthDay = this.randomBirthDay3();
            } 
        else if (this.person.birthMonth === "июня"){
            this.person.birthDay = this.randomBirthDay2();
            } 
        else if (this.person.birthMonth === "июля"){
            this.person.birthDay = this.randomBirthDay3();
            } 
        else if (this.person.birthMonth === "августа"){
            this.person.birthDay = this.randomBirthDay3();
            } 
        else if (this.person.birthMonth === "сентября"){
            this.person.birthDay = this.randomBirthDay2();
            } 
        else if (this.person.birthMonth === "октября"){
            this.person.birthDay = this.randomBirthDay3();
            } 
        else if (this.person.birthMonth === "ноября"){
            this.person.birthDay = this.randomBirthDay2();
            } 
        else {
            this.person.birthDay = this.randomBirthDay3();
        }; 
        return this.person.birthDay;
    },

    randomBirthDay1: (max = 28, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    randomBirthDay2: (max = 30, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    randomBirthDay3: (max = 31, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomBirthYear: (max = 2002, min = 1950) => Math.floor(Math.random() * (max - min + 1) + min), 

    getPerson: function () {

        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.surname = this.randomSurname();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.getData();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession(); 
        return this.person;
    }
}; 
    
document.querySelector('#btn-init').addEventListener('click', function() {
   // window.location.reload();
    window.onload;

    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
}
    
);

   
document.querySelector('#btn-reset').addEventListener('click', function () {
   window.location.reload();
})    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
