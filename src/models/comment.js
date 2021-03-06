var mongodb = require('./db');

function Comment(name, time, title, comment) {
    this.name = name;
    this.time = time;
    this.title = title;
    this.comment = comment;
}

module.exports = Comment;

//存储一条留言信息
Comment.prototype.save = function(callback) {
    var name = this.name,
        day = this.time,
        title = this.title,
        comment = this.comment;
        
    //打开数据库
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection('posts', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            //通过用户名、时间及标题查找文档，并把一条留言对象添加到该文档的 comments 数组里
            collection.update({
                "name": name,
                "time.day": day,
                "title": title
            }, {
                $push: {
                    "comments": comment,
                }
            }, function (err) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null);
            });
        });
    });
};

//删除一条留言信息
Comment.remove = function (name, day, title, commenter, time, callback) {
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection("posts", function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.update({
                "name": name,
                "time.day": day,
                "title": title
            }, {
                $pull: {
                    "comments": {
                        "time": time,
                        "name": commenter
                    }
                }
            }, function (err) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null);
            });
        });
    });
};
//用户更新头像之后，更新评论中的用户头像
Comment.uphead = function(name, head, callback) {
    //打开数据库
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection("posts", function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            
            collection.update({
                "comments.name":name
            }, { $set:{ 
                "comments.$.head":head
            }
                
            }, {multi: true} ,function (err) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null);
            });
        });
    });
};
