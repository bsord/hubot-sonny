module.exports = function(robot) {
  
    robot.hear(/:wink:/i, function(res) {
      res.message.thread_ts = res.message.id;
      res.send ("What does this action signify? :wink:");
    });
  
    robot.respond(/sonny/i, function(res) {
      res.message.thread_ts = res.message.id;
      res.send ("Yes, detective?");
    });
  
    robot.hear(/trust/i, function(res) {
      robot.adapter.client.web.reactions.add('wink', {channel: res.message.room, timestamp: res.message.id})
    });
  };
  