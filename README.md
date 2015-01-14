# BinaryJS
### Binary handling for Javascript

BinaryJS is a simple library that provides binary conversion functions for both single characters and strings.

1. **Encoding**  
You can use either of the two encoding methods. The first, `encodeString`, is meant for longer strings of text,
but will also accept single characters. **Spaces are not currently supported**, and neither are any other
characters outside the standard English alphabet (though some support is upcoming). To use:

```
  // Instantiate a new Binary instance
  var binary = new Binary();
    
  // Translate a string of text
  var translatedText = binary.encodeString("HelloWorld!");
```

The other method, `encodeChar` is intended for single characters and **will not work** with anything longer. The 
same restrictions about unsupported characters apply. This method is internally used for `encodeString`. Use:

```
  // Instantiate a new Binary instance
  var binary = new Binary();
  
  // Translate a single character
  var translatedChar = binary.encodeChar("A");
```

2. **Decoding**  
Again, you can use either decoding function, with similar limitations. The first method, `decodeString`, works as 
the opposite of `encodeString`. Again, spaces and special characters are unsupported. Here's an example:

```
  // Instantiate a new Binary instance
  var binary = new Binary();
  
  // Translate your string
  var clearText = binary.decodeString("0110000101000010");
```

And lastly, the `decodeChar` method is the opposite number of the `encodeChar` method. Again, it is internally used
 for `decodeString`, and the character limitations still apply. It will not accept anything longer than one binary 
character. Its use:
 
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

Lastly, there are also some String prototype extensions and some custom errors included. While this shouldn't be a 
problem, prototype modifications can interfere between libraries, so be aware. I am looking at ways to change this 
so prototype extensions aren't needed.