// Copyright (C) 2018 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.   6/8/18

//var data = 1882914879;                              // PLAYERvsPLAYER
//var timestamp = 1527633420;                         // Results for Tue May 29 22:37:00 2018 GMT
//var benchmark = 777000000000;                       // Random number I also wanted to use in hash
//var hash = (index + benchmark + timestamp + data);  // hash: 780410548299          console.log("hash:", hash );
//var genesisHash = hash.toString(16);                // genesisHash: b5b417f04b     console.log("genesisHash:", genesisHash );
//var genesisHash = hash.toString(32);                // genesisHash: mmq1fs2b


var hash=0;
var Hash=0;
var index=0;
var nonce=0;
var nnonce=0;
var difficulty=2;
var Reward=.1000000000000000000;
var miningReward=0;
var totalCoins=0;
var maxCoins=777000000;
var blocks=[];                     // Array  ~ block or myblock or myBlock?  - numbers
var previoushash = 780410548299 ;  // Genesis Number Now Becomes Global For transaction()
var previousHash = 'b5b417f04b';   // Genesis Number Hashed into String   AKA Genesis Hash !!!
var miningRewardAddress=0;
var pendingTransactions=[];
var data = 1882914879;               // PLAYERvsPLAYER
var timestamp = 1527633420;          // Results for Tue May 29 22:37:00 2018 GMT
var benchmark = 777000000000;        // This is how I simply establish the first 3 digits of future hash's.
var confirmed = 0                    // 0 = no

var block = {timestamp: "5/29/2018", data: "PLAYERvsPLAYER", Hash: "b5b417f04b", previousHash: "0", nonce: "", confirmed: (confirmed), PvPCoins: (7777000)}; // Genesis Block Object - strings text
blocks.push(block);
	 
	function PVPCoinTransaction() {
    nonce = nonce + 1;
	var myDate = new Date();                     // console.log(myDate);     // 2018-06-05T02:15:19.213Z
    timestamp = Math.round(+new Date()/1000);    // console.log(timestamp);  // 1528164919 this is seconds, not miliseconds
	hash = (index + data + timestamp + previoushash + nonce);  // console.log("new hash number of Hash =", hash);  // = 783821096598
	Hash = hash.toString(16);                    // console.log("New Hash =", Hash);  // New String of Number Hash = b67f60c696
	block = {timestamp: (timestamp), data: (data), Hash: (Hash), previoushash: (previoushash), nonce: (nonce+1), confirmed: (confirmed), PvPCoins: (Reward)}; // New Block Object
    blocks.push(block);
    previoushash = hash
	console.log(blocks);
  miningReward = (miningReward + Reward)
 // console.log(miningReward);
  document.getElementById("unconfirmed").innerHTML = miningReward;
  document.getElementById("transactions").innerHTML = Hash;
  document.getElementById("text").innerHTML = "You Mined Block: ";
  document.getElementById("rew").innerHTML = "Received .1 of a coin.";
}


// When server is implimented, and or code gets packaged as a stand alone desktop app, address and recode the hard coded genesis so only
// I have the premine. Also fix the lag in the DOM so it displays the entered wager; for some reason its one wager behind, and I
// think its due to the genesis, and first wager triggering two blocks.

// ---------------------------------------------------------------------------------------
// ------------------------ Code Above Is Good So Far ------------------------------------
// ---------------------------------------------------------------------------------------




