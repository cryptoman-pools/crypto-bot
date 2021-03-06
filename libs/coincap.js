var request = require('request');
const config = require("../config.json");

class CryptoBot {
	constructor(options={}){
		this.API_URL = options.API_URL || config.apiURL;
	}
	pars3JSON(url, callback){
		let opt = {
			url: this.API_URL+url,
			method: "GET",
			timeout: 360,
			agent: false,
			headers: {
				'User-Agent': 'Mozilla/6.9 (compatible; https://github.com/cryptom4n/crypto-bot)',
				'CR-API': config.cryptomanAPIKEY,
				'Content-type': 'application/x-www-form-urlencoded'
			}
		};
		request(opt, (error, response, body) => {
			if(error){ 
				callback(false);
				return this;
			}
			if(response && response.statusCode == 200){
				callback(JSON.parse(body))
			} else {
				callback(false);
				return this;
			}
		});
	}
	get(coin, callback){
		if(callback){
			this.pars3JSON(`/${coin}`, (res) => {
				if(res){callback(res);}
			});
			return this;
		} else {
			return false;
		}
	}
}
module.exports = CryptoBot;
