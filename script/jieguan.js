const schedule = require("node-schedule");
const follow = require('./test_follow')
const user = require('./test_user')
const tag = require('./test_tag_unknow')
const mem = require("../util/mem")
var code = 84

var rule = new schedule.RecurrenceRule();
var times = [1, 11, 21, 31, 41, 51];
rule.second = times;
var j = schedule.scheduleJob(rule, async function () {
    let follow_flag = await mem.get('big_follow_flag_' + code)
    if (!follow_flag) {
        follow.users(code)
        await mem.set("big_follow_flag_" + code, 1, 60 * 60)
    }
})

var rule1 = new schedule.RecurrenceRule();
var times1 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
rule1.second = times1;
var k = schedule.scheduleJob(rule1, async function () {
    let user_flag = await mem.get('big_user_flag_' + code)
    if (!user_flag) {
        user.get_user(code)
        await mem.set("big_user_flag_" + code, 1, 60 * 60)
    }
})

var rule2 = new schedule.RecurrenceRule();
var times2 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
rule2.second = times2;
var l1 = schedule.scheduleJob(rule2, async function () {
    let tag_flag = await mem.get('big_tag_flag_' + code)
    if (!tag_flag) {
        tag.tag(code)
        await mem.set("big_tag_flag_" + code, 1, 60 * 60)
    }
})
var l2 = schedule.scheduleJob(rule2, async function () {
    let tag_flag = await mem.get('big_tag_flag_' + code)
    if (!tag_flag) {
        tag.tag(code)
        await mem.set("big_tag_flag_" + code, 1, 60 * 60)
    }
})
var l3 = schedule.scheduleJob(rule2, async function () {
    let tag_flag = await mem.get('big_tag_flag_' + code)
    if (!tag_flag) {
        tag.tag(code)
        await mem.set("big_tag_flag_" + code, 1, 60 * 60)
    }
})
