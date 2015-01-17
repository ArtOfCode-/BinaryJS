function runTests() {
	// Test 1/1
	if(binary.encodeChar("A") == "01000001") {
		document.getElementById("test:encodeChar").className = "test-pass";
	}
	
	// Test 1/2
	if(binary.encodeString("Ab") == "0100000101100010") {
		document.getElementById("test:encodeString").className = "test-pass";
	}
	
	// Test 1/3
	if(binary.decodeChar("01000001") == "A") {
		document.getElementById("test:decodeChar").className = "test-pass";
	}
	
	// Test 1/4
	if(binary.decodeString("0100000101100010") == "Ab") {
		document.getElementById("test:decodeString").className = "test-pass";
	}
	
	// Test 1/5
	if(binary.binaryAdd([(64 + 0).toString(2), (64 + 0).toString(2)]) == (128 + 0).toString(2)) {
		document.getElementById("test:binaryAdd").className = "test-pass";
	}
	
	// Test 1/6
	if(binary.binarySubtract([(64 + 0).toString(2), (64 + 0).toString(2)]) == (0 + 0).toString(2)) {
		document.getElementById("test:binarySubtract").className = "test-pass";
	}
	
	// Test 2/1
	try {
		binary.encodeChar(":");
	}
	catch(e) {
		document.getElementById("test:error:encodeChar:arrayOutOfBounds").className = "test-pass";
	}
	
	// Test 2/2
	try {
		binary.encodeChar("Ab");
	}
	catch(e) {
		document.getElementById("test:error:encodeChar:argLength").className = "test-pass";
	}
	
	// Test 2/3
	try {
		binary.decodeChar("0");
	}
	catch(e) {
		document.getElementById("test:error:decodeChar:charLengthInvalid").className = "test-pass";
	}
	
	// Test 2/4
	try {
		binary.decodeChar("01111111");
	}
	catch(e) {
		document.getElementById("test:error:decodeChar:binaryOver26").className = "test-pass";
	}
	
	// Test 2/5
	try {
		binary.decodeChar("00000001");
	}
	catch(e) {
		document.getElementById("test:error:decodeChar:invalidCharType").className = "test-pass";
	}
	
	// Test 2/6
	try {
		binary.binaryAdd(["nan", "also nan"]);
	}
	catch(e) {
		document.getElementById("test:error:binaryAdd:NaN").className = "test-pass";
	}
	
	// Test 2/7
	try {
		binary.binarySubtract(["nan", "also nan"]);
	}
	catch(e) {
		document.getElementById("test:error:binarySubtract:NaN").className = "test-pass";
	}
	
	// Test 3/1
	if(binary.makeStringFromArray(["A", "b"]) == "Ab") {
		document.getElementById("test:aux:makeArrayFromString").className = "test-pass";
	}
	
	// Test 3/2
	if(binary.isSupported("A") && binary.isSupported("0") && !binary.isSupported("@")) {
		document.getElementById("test:aux:isSupported").className = "test-pass";
	}
}