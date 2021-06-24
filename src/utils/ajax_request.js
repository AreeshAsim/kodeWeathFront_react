/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import $ from 'jquery';
import {baseDomain,adminApiDomain,adminLoginURL,sessionExpireStatus} from '../config';
import Swal from "sweetalert2";

/**
 * @param url
 * @param method
 * @param data
 * @returns URL response
 */
function userApiCall( url, method, data) {
	return new Promise(function ( resolve,reject ) {
		try{
			$.ajax({
				url:baseDomain+url,
				headers: {
					'Content-Type': 'application/json'
				},
				method: method || 'GET',
				data,
				success: function ( data ) {
					resolve(data);
				},
				error: function ( err ) {
					console.log(err);
					reject(err)
				}
			});
		}
		catch ( e ) {
			reject(e);
		}
	})
}

function adminApiCall(url,method,data) {
	return new Promise(function ( resolve,reject ) {
		try{
			$.ajax({
				url:adminApiDomain+url,
				headers: {
					'Content-Type': 'application/json',
					'Authorization':localStorage.getItem('adminToken'),
				},
				method: method || 'GET',
				data,
				success: function ( data ) {
					if(data.status && data.status==sessionExpireStatus){
						Swal.fire({
							title: 'Error!',
							text: data.message,
							icon: 'error',
						}).then(
							function () {
								localStorage.clear();
								window.location.href='/admin/login';
							}
						)
					}
					resolve(data);
				},
				error: function ( err ) {
					console.log(err);
					reject(err)
				}
			});
		}
		catch ( e ) {
			reject(e);
		}
	})
}

function adminLogin(data) {
	return new Promise(function ( resolve,reject ) {
		try{
			$.ajax({
				url:adminLoginURL,
				headers: {
					'Content-Type': 'application/json'
				},
				method:'POST',
				data,
				success: function ( data ) {
					resolve(data);
				},
				error: function ( err ) {
					console.log(err);
					reject(err)
				}
			});
		}
		catch ( e ) {
			reject(e);
		}
	})
}


export {
	userApiCall,
	adminApiCall,
	adminLogin
}
