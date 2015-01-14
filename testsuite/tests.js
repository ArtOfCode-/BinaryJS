function runTests() {
	// Test 1
	if(binary.encodeChar("A") == "01100001") {
		document.getElementById("test:encodeChar").className = "test-pass";
	}
	
	// Test 2
	if(binary.encodeString("Ab") == "0110000101000010") {
		document.getElementById("test:encodeString").className = "test-pass";
	}
	
	// Test 3
	if(binary.decodeChar("01100001") == "A") {
		document.getElementById("test:decodeChar").className = "test-pass";
	}
	
	// Test 4
	if(binary.decodeString("0110000101000010") == "Ab") {
		document.getElementById("test:decodeString").className = "test-pass";
	}
	
	// Test 5
	try {
		binary.encodeChar(":");
	}
	catch(e) {
		document.getElementById("test:error:encodeChar:arrayOutOfBounds").className = "test-pass";
	}
	
	// Test 6
	try {
		binary.encodeChar("Ab");
	}
	catch(e) {
		document.getElementById("test:error:encodeChar:argLength").className = "test-pass";
	}
	
	// Test 7
	try {
		binary.decodeChar("0");
	}
	catch(e) {
		document.getElementById("test:error:decodeChar:charLengthInvalid").className = "test-pass";
	}
	
	// Test 8
	try {
		binary.decodeChar("01111111");
	}
	catch(e) {
		document.getElementById("test:error:decodeChar:binaryOver26").className = "test-pass";
	}
	
	// Test 9
	try {
		binary.decodeChar("00000001");
	}
	catch(e) {
		document.getElementById("test:error:decodeChar:invalidCharType").className = "test-pass";
	}
	
	// Test 10
	if(binary.makeStringFromArray(["A", "b"]) == "Ab") {
		document.getElementById("test:aux:makeArrayFromString").className = "test-pass";
	}
}