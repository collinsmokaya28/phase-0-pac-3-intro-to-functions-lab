function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate (string) {
    const cantUnswer = "I can't hear you!";
    const yesUnswer = "YES INDEED!";
    const lovUnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === string) {
      return lovUnswer
    }
  }