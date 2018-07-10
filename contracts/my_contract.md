##1.  

'use strict';

// 定义信息类
var Info = function (text) {
    if (text) {
        var obj = JSON.parse(text); // 如果传入的内容不为空将字符串解析成json对象
        this.orderID   = obj.orderID;                 // Order ID
        this.txHash    = obj.txHash;                  // txHash
        this.content   = obj.content;                 // 内容, 注释信息，描述
        this.author    = obj.author;                  // 作者， from Address
        this.timestamp = obj.timestamp;               // 时间戳
    } else {
        this.orderID   = "";
        this.txHash    = "";
        this.content   = "";
        this.author    = "";
        this.timestamp = 0;
    }
};

// 将信息类对象转成字符串
Info.prototype.toString = function () {
    return JSON.stringify(this)
};

// 定义智能合约
var InfoContract = function () {
    // 使用内置的LocalContractStorage绑定一个map，名称为infoMap
    // 这里不使用prototype是保证每布署一次该合约此处的infoMap都是独立的
    LocalContractStorage.defineMapProperty(this, "infoMap", {
        // 从infoMap中读取，反序列化
        parse: function (text) {
            return new Info(text);
        },
        // 存入infoMap，序列化
        stringify: function (o) {
            return o.toString();
        }
    });
};

// 定义合约的原型对象
InfoContract.prototype = {

    // init是星云链智能合约中必须定义的方法，只在布署时执行一次
    init : function () {
    },

    // 提交信息到星云链保存，传入标题和内容
    save : function (orderID, txHash, content) {
        orderID = orderID.trim();
        txHash  = txHash.trim();
        content = content.trim();

        if (orderID === "" || txHash === "") {
            throw new Error("Order ID or txHash 为空！");
        }

        if (orderID.length > 64) {
            throw new Error("标题长度超过64个字符！");
        }

        if (content.length > 256) {
            throw new Error("内容长度超过256个字符！");
        }

        // 使用内置对象Blockchain获取提交内容的作者钱包地址
        var from = Blockchain.transaction.from;
        // 此处调用前面定义的反序列方法parse，从存储区中读取内容
        var existInfo = this.infoMap.get(from);
        if (existInfo) {
            //throw new Error("您已经发布过内容！"); 可以重复发布
        }

        var existID = this.infoMap.get(orderID);
        if (existID) {
            throw new Error("order ID exists ！"); // order ID can not repeat 
        }

        var info = new Info();
        info.orderID   = orderID;
        info.txHash    = txHash;
        info.content   = content;
        info.timestamp = new Date().getTime();
        info.author    = from;

        // 此处调用前面定义的序列化方法stringify，将Info对象存储到存储区
        //this.infoMap.put(from, info);
        this.infoMap.put(orderID, info);
    },

    // 根据作者的钱包地址从存储区读取内容，返回Info对象
    read : function (author) {
        author = author.trim();
        if (author === "") {
            throw new Error("地址为空！");
        }
        // 验证地址
        if (!this.verifyAddress(author)) {
            throw new Error("输入的地址不存在！");
        }
        var existInfo = this.infoMap.get(author);
        return existInfo;
    },
    
    // 根据Order ID 从存储区读取内容，返回Info对象
    readByID : function (orderID) {

        orderID = orderID.trim();
        if (orderID === "") {
            throw new Error("orderID 为空！");
        }

        // orderID
        //if (!this.verifyAddress(author)) {
            //throw new Error("输入的地址不存在！");
        //}

        var existInfo = this.infoMap.get(orderID);
        return existInfo;
    },

    // 验证地址是否合法
    verifyAddress: function (address) {
        // 1-valid, 0-invalid
        var result = Blockchain.verifyAddress(address);
        return {
            valid: result == 0 ? false : true
        };
    }
};
// 导出代码，标示智能合约入口
module.exports = InfoContract;



##2. 
// #2. ------------------------------------------------------------------------------------------------
// Can read array items : testnet:
// TX Hash	            c47cd1e3050c1d44c722104b2069556dbb95ae85998a04f4172e60885cba2497
// Contract address	    n1oTKAexjsq9aLea79XawUkJijrRmWNvf5U

// Mainnet :
// TX Hash	            12410a945cea5ec688d11afa216876426dc99f85906c2239058aa79c589eb076
// Contract address	    n1iv8umQDW3NDu5HJL1stVjaBWiPpFmmmVV

// lastest one: Mainnet
// TX Hash	55edfa5cadf1cd0562a41e51d6da600c577c5597340a12e2888b71b46b413a93
// Contract address	n1uuCajSGtnuXmTymE79rNvWjWQPyVjTy7H

'use strict';

// 定义信息类
var Info = function (text) {
    
    if (text) {
        var obj = JSON.parse(text); // 如果传入的内容不为空将字符串解析成json对象

        this.index     = obj.index;                   // Index
        this.orderID   = obj.orderID;                 // Order ID
        this.txHash    = obj.txHash;                  // txHash
        this.content   = obj.content;                 // 内容, 注释信息，描述
        this.author    = obj.author;                  // 作者， from Address
        this.timestamp = obj.timestamp;               // 时间戳
    } 
};

// 将信息类对象转成字符串
Info.prototype.toString = function () {
    return JSON.stringify(this)
};

// 定义智能合约
var InfoContract = function () {

    LocalContractStorage.defineProperty(this, "size");         // Info size
    LocalContractStorage.defineMapProperty(this, "arrayMap");  // save all keys, unused now

    // 使用内置的LocalContractStorage绑定一个map，名称为infoMap
    // 这里不使用prototype是保证每布署一次该合约此处的infoMap都是独立的
    LocalContractStorage.defineMapProperty(this, "infoMap", {
        // 从infoMap中读取，反序列化
        parse: function (text) {
            return new Info(text);
        },
        // 存入infoMap，序列化
        stringify: function (o) {
            return o.toString();
        }
    });
};

// 定义合约的原型对象
InfoContract.prototype = {

    // init是星云链智能合约中必须定义的方法，只在布署时执行一次
    init : function () {
        this.size = 0;
    },

    // 提交信息到星云链保存，传入标题和内容
    save : function (orderID, txHash, content) {
        orderID = orderID.trim();
        txHash  = txHash.trim();
        content = content.trim();

        if (orderID === "" || txHash === "") {
            throw new Error("Order ID or txHash 为空！");
        }

        if (orderID.length > 64) {
            throw new Error("标题长度超过64个字符！");
        }

        if (content.length > 256) {
            throw new Error("内容长度超过256个字符！");
        }

        if (this.size > 1000) {
            throw new Error(" size 长度超过 100 个！");
        }

        // 使用内置对象Blockchain获取提交内容的作者钱包地址
        var from = Blockchain.transaction.from;
        // 此处调用前面定义的反序列方法parse，从存储区中读取内容
        //var existInfo = this.infoMap.get(from);
        //if (existInfo) {
            //throw new Error("您已经发布过内容！"); 可以重复发布
        //}

        //var existID = this.infoMap.get(orderID);
        //if (existID) {
            //throw new Error("order ID exists ！"); // order ID can not repeat 
        //}

        var info = new Info();
        info.orderID   = orderID;
        info.txHash    = txHash;
        info.content   = content;
        info.timestamp = new Date().getTime();
        info.author    = from;

        this.size +=1;
        info.index = this.size;

        // 此处调用前面定义的序列化方法stringify，将Info对象存储到存储区, index is Key 
        //this.infoMap.put(from, info);
        //this.infoMap.put(orderID, info);
        this.infoMap.put(info.index, info);
    },
    
    // 根据Order ID 从存储区读取内容，返回第一个满足条件的Info对象
    readByID : function (orderID) {

        orderID = orderID.trim();
        if (orderID === "") {
            throw new Error("orderID 为空！");
        }

        for(var i = 1; i <= this.size; i++){

            var object = this.infoMap.get(i);

            if( object.orderID === orderID )
                return object;
        }   

        // can not find
        return null;
    },

    // 根据Index 从存储区读取内容，返回Info对象,   1 <= index <= this.size
    read : function (index) {

        index = parseInt(index);
        if ( index > this.size ) {
            throw new Error("Index 不存在！");
        }

        if ( index < 1 ) {
            throw new Error("Index 不存在！");
        }

        var existInfo = this.infoMap.get(index);
        return existInfo;
    },

    len:function(){
        return this.size;
    },

    // 验证地址是否合法
    verifyAddress: function (address) {
        // 1-valid, 0-invalid
        var result = Blockchain.verifyAddress(address);
        return {
            valid: result == 0 ? false : true
        };
    }
};
// 导出代码，标示智能合约入口
module.exports = InfoContract;



##3. 第三版：
// #3. -------------------------------------------------
// Can return array items: Test net 
// TX Hash	862733170f4f1323cd119d0e411ac071af99dd48470e9b9ada8d52afe2c98a38 
// Contract address	n1jH8KVhHfRdy8MFQWbtRzvUgzMmANTLU4A

// Main net:
// TX Hash	e914fe86549a827453a6c51acf01e503a2607b9b206f7a35a79d5723e0be9b60
// Contract address	n1rJDXyhFfrRUBfLC2EcvuVwH3awT3T1cWq



'use strict';

// 定义信息类
var Info = function (text) {
    
    if (text) {
        var obj = JSON.parse(text); // 如果传入的内容不为空将字符串解析成json对象

        this.index     = obj.index;                   // Index
        this.orderID   = obj.orderID;                 // Order ID
        this.txHash    = obj.txHash;                  // txHash
        this.content   = obj.content;                 // 内容, 注释信息，描述
        this.author    = obj.author;                  // 作者， from Address
        this.timestamp = obj.timestamp;               // 时间戳
    } 
};

// 将信息类对象转成字符串
Info.prototype.toString = function () {
    return JSON.stringify(this)
};

// 定义智能合约
var InfoContract = function () {

    LocalContractStorage.defineProperty(this, "size");         // Info size
    LocalContractStorage.defineMapProperty(this, "arrayMap");  // save all keys, unused now

    // 使用内置的LocalContractStorage绑定一个map，名称为infoMap
    // 这里不使用prototype是保证每布署一次该合约此处的infoMap都是独立的
    LocalContractStorage.defineMapProperty(this, "infoMap", {
        // 从infoMap中读取，反序列化
        parse: function (text) {
            return new Info(text);
        },
        // 存入infoMap，序列化
        stringify: function (o) {
            return o.toString();
        }
    });
};

// 定义合约的原型对象
InfoContract.prototype = {

    // init是星云链智能合约中必须定义的方法，只在布署时执行一次
    init : function () {
        this.size = 0;
    },

    // 提交信息到星云链保存，传入标题和内容
    save : function (orderID, txHash, content) {
        orderID = orderID.trim();
        txHash  = txHash.trim();
        content = content.trim();

        if (orderID === "" || txHash === "") {
            throw new Error("Order ID or txHash 为空！");
        }

        if (orderID.length > 64) {
            throw new Error("标题长度超过64个字符！");
        }

        if (content.length > 256) {
            throw new Error("内容长度超过256个字符！");
        }

        if (this.size > 1000) {
            throw new Error(" size 长度超过 100 个！");
        }

        // 使用内置对象Blockchain获取提交内容的作者钱包地址
        var from = Blockchain.transaction.from;
        // 此处调用前面定义的反序列方法parse，从存储区中读取内容
        //var existInfo = this.infoMap.get(from);
        //if (existInfo) {
            //throw new Error("您已经发布过内容！"); 可以重复发布
        //}

        //var existID = this.infoMap.get(orderID);
        //if (existID) {
            //throw new Error("order ID exists ！"); // order ID can not repeat 
        //}

        var info = new Info();
        info.orderID   = orderID;
        info.txHash    = txHash;
        info.content   = content;
        info.timestamp = new Date().getTime();
        info.author    = from;

        this.size +=1;
        info.index = this.size;

        // 此处调用前面定义的序列化方法stringify，将Info对象存储到存储区, index is Key 
        //this.infoMap.put(from, info);
        //this.infoMap.put(orderID, info);
        this.infoMap.put(info.index, info);
    },
    
    // 根据Order ID 从存储区读取内容，返回第一个满足条件的Info对象
    readByID : function (orderID) {

        orderID = orderID.trim();
        if (orderID === "") {
            throw new Error("orderID 为空！");
        }

        for(var i = 1; i <= this.size; i++){

            var object = this.infoMap.get(i);

            if( object.orderID === orderID )
                return object;
        }   

        // can not find
        return null;
    },

    // 根据Index 从存储区读取内容，返回Info对象,   1 <= index <= this.size
    read : function (index) {

        index = parseInt(index);
        if ( index > this.size ) {
            throw new Error("Index 不存在！");
        }

        if ( index < 1 ) {
            throw new Error("Index 不存在！");
        }

        var existInfo = this.infoMap.get(index);
        return existInfo;
    },

    len:function(){
        return this.size;
    },

    getItems: function() {
        var result = [];
        for (var i = 1; i <= this.size; i++) {
            var item = this.infoMap.get(i);
            result.push(item);
        }
        return result;
    }, 

    // 验证地址是否合法
    verifyAddress: function (address) {
        // 1-valid, 0-invalid
        var result = Blockchain.verifyAddress(address);
        return {
            valid: result == 0 ? false : true
        };
    }
};
// 导出代码，标示智能合约入口
module.exports = InfoContract;


