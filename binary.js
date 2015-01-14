function Binary() {
	var self = this;
	
	this.decodeString = function(binaryString) {
		if(binaryString.length % 8 != 0) {
			console.warn("Binary characters should be 8 bits long each.");
			throw new BinaryError("Characters could not be formed from the binary string.");
		}
		
		var chars = [];
		
		var i = 0;
		while(binaryString.length >= 8) {
			chars[i] = binaryString.substr(0, 8);
			binaryString = binaryString.substr(8);
			i++;
		}
		
		for(var m = 0; m < chars.length; m++) {
			chars[m] = self.decodeChar(chars[m]);
		}
		
		return self.makeStringFromArray(chars);
	}
	this.decodeChar = function(binaryChar) {
		var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		
		if(binaryChar.length != 8) {
			console.warn("Binary characters should be 8 bits long.");
			throw new BinaryError("Binary character length invalid.");
		}
		
		var charType = binaryChar.substr(0, 3);
		binaryChar = binaryChar.substr(3);

		
		var alphaIndex = 0;
		for(var i = 0; i < binaryChar.length; i++) {
			var additionType = Math.pow(2, (binaryChar.length - 1) - i);
			if(binaryChar.charAt(i) === "1") {
				alphaIndex += additionType;
			}
		}
		
		if(alphaIndex > 26) {
			throw new ArgumentError("Binary number resolves to a letter not in the alphabet.");
		}
		
		if(charType == "011")
			return alphabet[alphaIndex - 1].toUpperCase();
		else if(charType == "010")
			return alphabet[alphaIndex - 1];
		else {
			console.warn("Binary characters should start with 011 for capital or 010 for lowercase.");
			throw new BinaryError("Binary character type could not be derived.");
		}
	}
	
	this.encodeString = function(plainString) {
		var chars = plainString.split("");
		for(var i = 0; i < chars.length; i++) {
			chars[i] = self.encodeChar(chars[i]);
		}
		return self.makeStringFromArray(chars);
	}
	this.encodeChar = function(plainChar) {
		var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var charType = (plainChar == plainChar.toUpperCase()) ? "011" : "010";
		var binaryChar = "00000";
		var index = alphabet.indexOf(plainChar.toLowerCase()) + 1;
		
		if(plainChar.length > 1) {
			throw new ArgumentError("The argument must be a single character.");
		}
		if(index == 0) {
			throw new ArgumentError("Character does not exist in the alphabet.");
		}
		
		if(index >= 16) {
			binaryChar = binaryChar.replaceAt(0, "1");
			index -= 16;
		}
		if(index >= 8) {
			binaryChar = binaryChar.replaceAt(1, "1");
			index -= 8;
		}
		if(index >= 4) {
			binaryChar = binaryChar.replaceAt(2, "1");
			index -= 4;
		}
		if(index >= 2) {
			binaryChar = binaryChar.replaceAt(3, "1");
			index -= 2;
		}
		if(index == 1) {
			binaryChar = binaryChar.replaceAt(4, "1");
			index -= 1;
		}
		return charType + binaryChar;
	}
	
	this.makeStringFromArray = function(charArray) {
		var string = "";
		for(var i = 0; i < charArray.length; i++) {
			string += charArray[i];
		}
		return string;
	}
	
	BinaryError.prototype.toString = function() {
		return this.name + ": " + this.message;
	}
	function BinaryError(message) {
		this.message = message;
		this.name = "BinaryError";
		return this.toString();
	}
	ArgumentError.prototype.toString = function() {
		return this.name + ": " + this.message;
	}
	function ArgumentError(message) {
		this.message = message;
		this.name = "ArgumentError";
		return this.toString();
	}
	
	String.prototype.replaceAt=function(index, character) {
		return this.substr(0, index) + character + this.substr(index+character.length);
	}
}