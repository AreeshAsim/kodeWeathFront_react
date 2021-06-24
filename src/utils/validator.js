/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2020-12-16
 */


import $ from 'jquery';

function alphabets(t) {
	return ("" == t.target.value || /^[a-zA-Z ]+$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function alphaNumeric(t) {
	return ("" == t.target.value || /^[0-9a-zA-Z.,!?@: ]+$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function numeric(t) {
	return ("" == t.target.value || /^[0-9]+$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function validateEmail(t) {
	return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function validatePhoneNumber(t) {
	return (/^[0-9()+-]+$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function validateTime(t) {
	return (/^[0-9: ]+$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function validateDate(t) {
	return (/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

function validateFloat(t) {
	return (/^[0-9.]+$/.test(t.target.value) ? ($("#" + t.target.id).removeClass("error")) : ($("#" + t.target.id).addClass("error")))
}

export {
	alphabets,
	alphaNumeric,
	numeric,
	validateEmail,
	validatePhoneNumber,
	validateTime,
	validateDate,
	validateFloat
};
