module.exports = function(robot) {
  
    robot.hear(/:wink:/i, function(res) {
      res.send ("What does this action signify? :wink:");
    });
  
    robot.respond(/test/i, function(res) {
      res.send ("Yes, detective?");
    });
  
    robot.hear(/trust/i, function(res) {
      res.send (":wink:");
    });
  };
  