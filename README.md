# BinaryJS
### Binary handling for Javascript

BinaryJS is a simple library that provides binary conversion functions for both single characters and strings.

#### Encoding  
You can use either of the two encoding methods. The first, `encodeString`, is meant for longer strings of text,
but will also accept single characters.  To use:

```
  // Instantiate a new Binary instance
  var binary = new Binary();
    
  // Translate a string of text
  var translatedText = binary.encodeString("HelloWorld!");
```

The other method, `encodeChar` is intended for single characters and **will not work** with anything longer. This method is internally used for `encodeString`. Use:

```
  // Instantiate a new Binary instance
  var binary = new Binary();
  
  // Translate a single character
  var translatedChar = binary.encodeChar("A");
```

#### Decoding  
Again, you can use either decoding function, with similar limitations. The first method, `decodeString`, works as 
the opposite of `encodeString`. Here's an example:

```
  // Instantiate a new Binary instance
  var binary = new Binary();
  
  // Translate your string
  var clearText = binary.decodeString("0110000101000010");
```

And lastly, the `decodeChar` method is the opposite number of the `encodeChar` method. Again, it is internally used
 for `decodeString`. It will not accept anything longer than one binary character. Its use:
 
```
  // Instantiate a new Binary instance
  var binary = new Binary();
  
  // Translate a single character
  var clearChar = binary.decodeChar("01100001");
```

### Some more notes

There are a few utility methods included in this, which you will see from the source. Although you should not need 
to use them for BinaryJS to work, they are public methods and can be used for other purposes if you wish. (I made 
them public methods so they are testable).

There is some character support but not all characters can be encoded yet. The numbers 0-9, spaces, and the symbols 
`+`, `-`, `.` and `,` are supported, but I am adding more. There is also a method to test if a character is supported
if you're unsure:

```
  binary.isSupported("@");
  
  >>> false
  
  binary.isSupported(" ");    // Space, not an empty string
  
  >>> true
```
