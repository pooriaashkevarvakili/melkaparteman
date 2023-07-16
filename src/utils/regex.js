const Regex = {
	shsh: new RegExp(/(^[\s/0-9]*$)/),
	codeAgree: new RegExp(/^\d{4}$/),
	Identificationcode: new RegExp(/^0?[0-9]{1}/),
	night: new RegExp(/^\d{24}$/),
	address: new RegExp(/^[\u0600-\u06FF\s\d]+(،\s*[\u0600-\u06FF\s\d]+)*$/),
	Password: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#*]).{8,}$/),
	phone: new RegExp(/^\d{11}$/),
	postalCode: new RegExp(/^\d{9}$/),
	idNumber: new RegExp(/(^[\s/0-9]*$)/),
	Name: new RegExp(/^[\u0600-\u06FF\s]+$/g),
	NationalCode: new RegExp(/^\d{10}$/),
	persianAlphabets: new RegExp(/[\s\u0600-\u06FF]/),
	englishAlphabets: new RegExp(/[A-Za-z\xf6-\xf8\xe5]+[A-Za-z\xf6-\xf8\xe50-9]*/),
	email: new RegExp(/(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/),
	phoneNumber: new RegExp(/(^\s*$)|(^0\d{2,3}\d{8}$)/),
	mobileNumber: new RegExp(/^(?:\+98|0)?9[0-9]{9}$/),
	postCode: new RegExp(/(^\s*$)|(^\d{10}$)/),
	firstSpaceBlock: new RegExp(/^[^ ](.*|\n|\r|\r\n)*/),
	number: new RegExp(/(^[\s/0-9]*$)/),
	password: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/),
};

export default Regex;
