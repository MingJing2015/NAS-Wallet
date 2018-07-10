

'use strict';

// Plan one structure
var PlanoneItem = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.planName = obj.planName;
        this.totalDays = obj.totalDays;
        this.amountPerDay = new BigNumber(obj.amountPerDay); // 
        this.totalReceived = new BigNumber(obj.totalReceived);
        this.owner = obj.owner;
        this.ownerAddr = obj.ownerAddr;
        this.planType = obj.planType;

        this.totalSignDays = obj.totalSignDays;
        this.createTime = obj.createTime;
        this.lastSignTime = obj.lastSignTime;
        this.maxNonSign = obj.maxNonSign;
        this.isFinished = obj.isFinished;
    } else {
        this.planName = "";
        this.totalDays = 0;
        this.amountPerDay = new BigNumber(0);
        this.totalReceived = new BigNumber(0);
        this.owner = "";
        this.ownerAddr = "";

        this.planType = 0;
        this.totalSignDays = 0;
        this.createTime = 0;
        this.lastSignTime = 0;
        this.maxNonSign = 0;
        this.isFinished = false;
    }
};

PlanoneItem.prototype = {
    toString: function() {
        return JSON.stringify(this);
    }
};

// Plan two structure
var PlantwoItem = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.planName = obj.planName;
        this.totalDays = obj.totalDays;
        this.totalAmount = new BigNumber(obj.totalAmount);
        this.lastReturn = new BigNumber(obj.lastReturn);
        this.base = new BigNumber(obj.base);
        this.bonus = new BigNumber(obj.bonus);
        this.lastSignTime = obj.lastSignTime;
        this.createTime = obj.createTime;
        this.totalSignDays = obj.totalSignDays;
        this.maxNonSign = obj.maxNonSign;
        this.planType = obj.planType;

        this.owner = obj.owner;
        this.ownerAddr = obj.ownerAddr;
        this.isFinished = obj.isFinished;

    } else {
        this.planName = "";
        this.totalDays = 0;
        this.totalAmount = new BigNumber(0);
        this.lastReturn = new BigNumber(0);
        this.base = new BigNumber(0);
        this.bonus = new BigNumber(0);
        this.lastSignTime = 0;
        this.createTime = 0;
        this.totalSignDays = 0;
        this.maxNonSign = 0;
        this.planType = 0;

        this.owner = "";
        this.ownerAddr = "";
        this.isFinished = false;
    }
};

PlantwoItem.prototype = {
    toString: function() {
        return JSON.stringify(this);
    }
};

var PlanType = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.planHash = obj.planHash;
        this.planType = obj.planType;
    } else {
        this.planHash = "";
        this.planType = 0;
    }
};

PlanType.prototype = {
    toString: function() {
        return JSON.stringify(this);
    }
};

var OneBillionContract = function() {

    // planHash = SHA256(nickname, planName); 
    LocalContractStorage.defineMapProperty(this, "planoneMap", { // key: planHash, value: PlanoneItem
        parse: function(jsonText) {
            return new PlanoneItem(jsonText);
        },
        stringify: function(obj) {
            return obj.toString();
        }
    });

    LocalContractStorage.defineMapProperty(this, "plantwoMap", { // key: planHash, value: PlantwoItem
        parse: function(jsonText) {
            return new PlantwoItem(jsonText);
        },
        stringify: function(obj) {
            return obj.toString();
        }
    });

    LocalContractStorage.defineProperty(this, "publicPlanCount");
    
    LocalContractStorage.defineMapProperty(this, "publicPlan", { // key:number, value: PlanType
        parse: function(jsonText) {
            return new PlanType(jsonText);
        },
        stringify: function(obj) {
            return obj.toString();
        }
    });

    LocalContractStorage.defineMapProperty(this, "userPlanCount", {
        parse: function(jsonText) {
            return new BigNumber(jsonText);
        },
        stringify: function(obj) {
            return obj.toString();
        }
    });
    LocalContractStorage.defineMapProperty(this, "userPlan"); // key: nickname.count , value: planHash
};

OneBillionContract.prototype = {
    init: function() {
        this.publicPlanCount = 0;
    },

    createNewPlanone: function(nickname, planName, totalDays, amountPerDay, isPublic, planHash) {

        var newPlan = this.planoneMap.get(planHash);
        if (newPlan != null) {
            throw new Error("此计划名已存在，请重新选择！");
        }

        var curTime = Blockchain.transaction.timestamp;
        var addrFrom = Blockchain.transaction.from;

        newPlan = new PlanoneItem();
        if (newPlan == null) {
            throw new Error("创建计划失败！");
        }
        newPlan.planName = planName;
        newPlan.totalDays = totalDays;
        newPlan.amountPerDay = new BigNumber(amountPerDay);
        newPlan.totalReceived = new BigNumber(0);
        newPlan.owner = nickname;
        newPlan.ownerAddr = addrFrom;
        newPlan.planType = 1;


        newPlan.lastSignTime = 0;
        newPlan.createTime = curTime;
        newPlan.totalSignDays = 0;
        newPlan.maxNonSign = 0;

        this.planoneMap.put(planHash, newPlan);
        var newPlanType = new PlanType();
        newPlanType.planType = 1;
        newPlanType.planHash = planHash;

        var planCount = this.userPlanCount.get(nickname);
        //	console.log("planCount:" + planCount);
        if (planCount == null) {
            planCount = 0;
        } else {
            planCount++;
        }
        var key = nickname + "." + planCount;
        this.userPlanCount.put(nickname, planCount);
        this.userPlan.put(key, newPlanType);
        //	console.log("put plan:" + key + "##" + newPlanType.planHash);

        if (isPublic) {
            this.publicPlan.put(this.publicPlanCount, newPlanType);
            this.publicPlanCount += 1;
        }
        return newPlan;
    },

    // (string, string, int, int, bool, string)
    createNewPlantwo: function(nickname, planName, totalDays, totalAmount, isPublic, planHash) {
        var newPlan = this.plantwoMap.get(planHash);
        if (newPlan != null) {
            throw new Error("该小目标名已存在，请选择其他名称。");
        }

        var curTime = Blockchain.transaction.timestamp;
        var addrFrom = Blockchain.transaction.from;
        var value = Blockchain.transaction.value;

        newPlan = new PlantwoItem();
        newPlan.planName = planName;
        newPlan.totalDays = totalDays;
        newPlan.totalAmount = new BigNumber(totalAmount * 1000000000000000000);
        newPlan.lastReturn = new BigNumber(0);
        newPlan.maxNonSign = 0;
        newPlan.planType = 2;

        if (!newPlan.totalAmount.eq(value)) {
            throw new Error("总金额不等于实际转账金额，请重新填写。");
        }

        newPlan.lastSignTime = 0;
        newPlan.createTime = curTime;
        newPlan.owner = nickname;
        newPlan.ownerAddr = addrFrom;
        newPlan.base = newPlan.totalAmount.div(totalDays * 2);
        newPlan.bonus = newPlan.base.div(totalDays - 1);

        newPlan.totalSignDays = 0;

        this.plantwoMap.put(planHash, newPlan);

        var newPlanType = new PlanType();
        newPlanType.planType = 2;
        newPlanType.planHash = planHash;

        var planCount = this.userPlanCount.get(nickname);
        if (planCount == null) {
            planCount = 0;
        } else {
            planCount++;
        }
        this.userPlanCount.put(nickname, planCount);
        this.userPlan.put(nickname + "." + planCount, newPlanType);

        if (isPublic) {
            this.publicPlan.put(this.publicPlanCount, newPlanType);
            this.publicPlanCount += 1;
        }
        return newPlan;
    },

    searchUserPlan: function(nickname) {
        var plan = [];
        var total = this.userPlanCount.get(nickname);
        //	console.log("nickname:" + nickname);
        //	console.log("total:" + total);

        for (var i = 0; i <= total; i++) {
            var key = nickname + "." + i;
            var type = this.userPlan.get(key);
            //		console.log("key: " + key + " res:" + type);
            if (type.planType == 1) {
                plan.push(this.planoneMap.get(type.planHash));
            } else {
                plan.push(this.plantwoMap.get(type.planHash));
            }
        }
        return plan;
    },

    _handlePlanone: function(plan, curTime, value, planHash) {
        var delta = curTime - plan.lastSignTime;
        var time = parseInt(delta / (24 * 60 * 60));
        // 签到时间间隔
        if (plan.lastSignTime > 0) {

            var wait = 24 * 60 - delta / 60;
            if (time == 0) {
                throw Error("签到间隔必须大于一天， 请" + wait + "分钟后再来签到！");
            }
            delta = delta - 24 * 60 * 60;
            if (plan.maxNonSign < delta) plan.maxNonSign = delta;
        }

        plan.totalSignDays++;
        var valBig = new BigNumber(value);
        var totalReceived = plan.totalReceived.plus(valBig);
        plan.totalReceived = totalReceived;
        var result = 1;

        if (plan.totalSignDays == plan.totalDays) { // This plan has finished
            var amountLeft = totalReceived.times(plan.totalSignDays).div(plan.totalDays);
            var tmp = totalReceived.minus(amountLeft);
            var toDays = parseInt(plan.maxNonSign / (24 * 60 * 60));
            var finalReturn = amountLeft.plus(tmp.times(4 - toDays).div(5));
            result = Blockchain.transfer(plan.ownerAddr, finalReturn);
            plan.isFinished = true;
        }
        plan.lastSignTime = curTime;
        this.planoneMap.put(planHash, plan); // update plan
        return result;
    },

    _handlePlantwo: function(plan, curTime, planHash) {
        var delta = curTime - plan.lastSignTime;
        var time = parseInt(delta / (24 * 60 * 60));
        var returnValue = new BigNumber(0);
        // 签到时间间隔
        if (plan.lastSignTime > 0) {

            var wait = 24 * 60 - delta / 60;
            if (time == 0) {
                throw Error("签到间隔必须大于一天， 请" + wait + "分钟后再来签到！");
            }
            delta = delta - 24 * 60 * 60;
            if (plan.maxNonSign < delta) plan.maxNonSign = delta;
        }

        plan.totalSignDays++;


        if (time > 1) { // you have miss more than one day
            returnValue = plan.base;
        } else if (plan.lastSignTime == 0) {
            returnValue = plan.base;
        } else {
            returnValue = plan.lastReturn.plus(plan.bonus);
        }

        plan.lastReturn = returnValue;
        plan.lastSignTime = curTime;
        if (plan.totalSignDays == plan.totalDays) {
            plan.isFinished = true;
        }

        this.plantwoMap.put(planHash, plan);
        var result = Blockchain.transfer(plan.ownerAddr, returnValue);
        return result;
    },

    signToday: function(planHash, planType) {
        var curTime = Blockchain.transaction.timestamp;
        var addrFrom = Blockchain.transaction.from;
        var value = Blockchain.transaction.value;
        var plan;

        if (planType == 1) {
            plan = this.planoneMap.get(planHash);
        } else if (planType == 2) {
            plan = this.plantwoMap.get(planHash);
        } else {
            throw new Error("计划类型错误，请填写 \"1\" 或 \"2\"");
        }


        if (plan == null) {
            throw new Error("计划名还没有创建，请修改计划名或以此名创建新计划.");
        }


        if (plan.ownerAddr != addrFrom) {
            throw new Error("没有权限修改他人的计划！" + plan + "#" + addrFrom + "#" + planType);
        }

        if (plan.isFinished) {
            throw new Error("此计划已经完成，不需要签到！");
        }

        var result;
        if (planType == 1) result = this._handlePlanone(plan, curTime, value, planHash);
        else if (planType == 2) result = this._handlePlantwo(plan, curTime, planHash);
        return result;
    },

    showPublicPlan: function() {
        var result = [];
        for (var i = 0; i < this.publicPlanCount; i++) {
            var type = this.publicPlan.get(i);
            var plan;
            if (type.planType == 1) plan = this.planoneMap.get(type.planHash);
            else if (type.planType == 2) plan = this.plantwoMap.get(type.planHash);
            else {
                // cannot hit here
            }

            result.push(plan);
        }
        return result;
    }
};

module.exports = OneBillionContract;
