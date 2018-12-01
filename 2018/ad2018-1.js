let freqs = [
"-6",
"-7",
"+2",
"-4",
"-10",
"+2",
"-6",
"-11",
"-19",
"-1",
"-14",
"+2",
"-12",
"+5",
"-2",
"+8",
"-9",
"+7",
"-10",
"-14",
"+3",
"-1",
"+19",
"+17",
"-4",
"+15",
"-17",
"+20",
"+14",
"+15",
"-19",
"+17",
"-6",
"+19",
"+19",
"+13",
"-11",
"-13",
"+17",
"+16",
"+11",
"-4",
"-3",
"+17",
"+10",
"-5",
"-16",
"-2",
"-15",
"+10",
"+10",
"-1",
"+17",
"-6",
"+18",
"-3",
"-13",
"-5",
"+19",
"+7",
"+11",
"+6",
"-7",
"-9",
"+17",
"+11",
"+7",
"+17",
"+4",
"+17",
"-6",
"-4",
"-18",
"+8",
"-4",
"+12",
"+7",
"+1",
"-15",
"-15",
"-14",
"-5",
"-13",
"-18",
"+13",
"-6",
"+10",
"-9",
"-14",
"-13",
"-1",
"-18",
"+11",
"+10",
"+8",
"+7",
"+11",
"+6",
"+9",
"+8",
"+5",
"-18",
"-7",
"-6",
"-7",
"+15",
"+2",
"-15",
"+3",
"-12",
"-10",
"-3",
"-19",
"+1",
"+5",
"-19",
"-8",
"+10",
"-13",
"+7",
"+20",
"-13",
"-9",
"+10",
"+7",
"+12",
"-1",
"+9",
"+19",
"-9",
"-35",
"-21",
"+1",
"-19",
"-19",
"-19",
"+11",
"+15",
"-3",
"+9",
"+10",
"+3",
"-12",
"-17",
"-15",
"+1",
"+7",
"+1",
"+14",
"-16",
"+10",
"+2",
"-5",
"-16",
"+4",
"-19",
"-23",
"+1",
"+9",
"+15",
"+12",
"+7",
"-15",
"-12",
"-15",
"-7",
"+18",
"-8",
"+19",
"+12",
"+9",
"-14",
"+4",
"+16",
"+18",
"-17",
"-25",
"-20",
"-21",
"+6",
"+1",
"+11",
"-6",
"-10",
"-3",
"-8",
"-4",
"-6",
"-11",
"-16",
"+1",
"+7",
"-17",
"+5",
"+14",
"-16",
"-6",
"+11",
"+6",
"-13",
"+19",
"+18",
"-7",
"-8",
"-2",
"+12",
"-5",
"+1",
"+11",
"+19",
"-1",
"-19",
"-23",
"+16",
"-19",
"+5",
"-3",
"-4",
"-5",
"-10",
"-1",
"-16",
"-1",
"-9",
"+8",
"+3",
"-7",
"+12",
"+2",
"+4",
"-2",
"+5",
"-2",
"-8",
"+18",
"+2",
"+18",
"+15",
"+15",
"-5",
"+13",
"-7",
"-29",
"+3",
"+3",
"+14",
"+1",
"-4",
"+2",
"-9",
"+17",
"-16",
"+14",
"+1",
"+6",
"+12",
"+7",
"+16",
"-6",
"-13",
"+27",
"+46",
"+9",
"+6",
"-1",
"-11",
"+13",
"+11",
"-3",
"-12",
"+21",
"+8",
"-16",
"+14",
"-7",
"-10",
"-9",
"-15",
"-8",
"+62",
"-6",
"+27",
"+52",
"+6",
"+11",
"+15",
"-17",
"+16",
"+8",
"+12",
"+6",
"-13",
"+9",
"-18",
"-5",
"-20",
"-19",
"-3",
"+17",
"+18",
"-2",
"-19",
"-10",
"+12",
"-20",
"+3",
"+8",
"+1",
"+1",
"+16",
"+6",
"+19",
"-14",
"+19",
"+15",
"-9",
"+10",
"+18",
"+15",
"-7",
"-7",
"-4",
"-12",
"+11",
"-19",
"+17",
"-4",
"+3",
"+19",
"+17",
"+10",
"+16",
"-17",
"+14",
"+4",
"+8",
"-7",
"+3",
"+16",
"+12",
"+4",
"+14",
"+8",
"-11",
"+19",
"-11",
"-17",
"+7",
"-12",
"+1",
"+8",
"+1",
"+8",
"-12",
"-11",
"-9",
"+18",
"-19",
"-13",
"-10",
"-8",
"+2",
"+20",
"+12",
"-14",
"+15",
"-19",
"+10",
"-16",
"-3",
"-1",
"+5",
"-12",
"-9",
"+7",
"-4",
"+5",
"-17",
"-17",
"+19",
"-13",
"+22",
"-14",
"+1",
"+15",
"-14",
"-19",
"-15",
"-16",
"+19",
"+10",
"-18",
"-1",
"+4",
"-16",
"+7",
"+8",
"-16",
"-14",
"-5",
"-14",
"-7",
"-22",
"+18",
"+6",
"+7",
"+49",
"+18",
"+10",
"+14",
"-10",
"+11",
"-3",
"-10",
"-13",
"+5",
"+4",
"+5",
"-2",
"+17",
"+10",
"-12",
"+16",
"+14",
"+5",
"+14",
"+4",
"-15",
"+21",
"+18",
"-7",
"+13",
"+17",
"-19",
"+8",
"+16",
"+1",
"-13",
"-25",
"-17",
"+4",
"-1",
"+18",
"+25",
"-19",
"-28",
"-9",
"-7",
"+14",
"-9",
"+8",
"-7",
"+24",
"+1",
"+23",
"-15",
"+22",
"+60",
"-22",
"+104",
"+36",
"-14",
"+174",
"+12",
"+4",
"+4",
"+4",
"-5",
"-30",
"-8",
"-17",
"+66",
"+38",
"-1",
"+22",
"-10",
"-31",
"-146",
"+53",
"-93",
"+184",
"-14",
"+140",
"-5",
"-171",
"+68756",
"-2",
"+9",
"-8",
"+15",
"-10",
"-19",
"-6",
"+12",
"+3",
"+7",
"-8",
"-12",
"-6",
"-6",
"+1",
"-13",
"-5",
"-1",
"+14",
"+18",
"-1",
"+2",
"+12",
"-10",
"+16",
"-10",
"-15",
"-19",
"+10",
"+3",
"-18",
"-3",
"-5",
"-16",
"+10",
"+3",
"-11",
"+3",
"+3",
"-17",
"-16",
"-9",
"+14",
"+7",
"-14",
"+17",
"-12",
"+10",
"+11",
"+16",
"-6",
"-6",
"-21",
"+7",
"+12",
"-16",
"-2",
"-13",
"-17",
"+7",
"-9",
"-3",
"+9",
"-7",
"-1",
"+5",
"+18",
"-4",
"+16",
"+11",
"-1",
"-15",
"+14",
"+14",
"-10",
"+14",
"-7",
"+10",
"+6",
"+6",
"+5",
"+6",
"-4",
"+12",
"+4",
"+2",
"-19",
"+12",
"+3",
"-12",
"-1",
"+24",
"+16",
"+14",
"+5",
"-3",
"-11",
"+16",
"+18",
"+9",
"-13",
"-4",
"+2",
"+14",
"-6",
"-9",
"+12",
"+6",
"+15",
"+3",
"+10",
"-14",
"+17",
"+8",
"+8",
"-3",
"-7",
"+12",
"+7",
"-13",
"+19",
"+1",
"+10",
"+2",
"+17",
"+18",
"-7",
"+1",
"+5",
"+11",
"+20",
"-3",
"-11",
"+15",
"-12",
"+9",
"-10",
"+14",
"-17",
"+18",
"-9",
"-16",
"-19",
"-8",
"+4",
"-18",
"-17",
"-8",
"-14",
"-8",
"-8",
"-14",
"-7",
"+3",
"-18",
"+19",
"+1",
"-10",
"+7",
"-16",
"-11",
"+17",
"-18",
"+2",
"-3",
"-12",
"-2",
"+18",
"-8",
"+10",
"+10",
"+5",
"-16",
"-16",
"-7",
"+1",
"-4",
"-16",
"+15",
"+15",
"-23",
"-2",
"-23",
"-16",
"-2",
"+13",
"-8",
"+29",
"+38",
"-1",
"-4",
"-10",
"+7",
"+27",
"-8",
"+15",
"+13",
"+20",
"+19",
"-17",
"-8",
"-17",
"+7",
"+1",
"+3",
"-9",
"+14",
"-18",
"+17",
"+5",
"+17",
"+13",
"+15",
"-10",
"+6",
"-15",
"-19",
"-1",
"-12",
"+4",
"+6",
"-14",
"+23",
"-2",
"+13",
"-12",
"+20",
"-7",
"+22",
"-11",
"-8",
"+9",
"+17",
"-4",
"+1",
"+14",
"-5",
"-4",
"-18",
"-19",
"+38",
"-4",
"+18",
"-16",
"+9",
"+14",
"-5",
"+17",
"+13",
"-9",
"+4",
"-12",
"-2",
"+9",
"+13",
"+24",
"-7",
"-5",
"+8",
"+19",
"+19",
"+11",
"-16",
"-11",
"+7",
"-13",
"+16",
"+14",
"-10",
"+4",
"+19",
"+16",
"+4",
"-3",
"+8",
"+8",
"-7",
"-17",
"-18",
"-3",
"-6",
"+4",
"+13",
"-6",
"+17",
"-9",
"+14",
"-9",
"-17",
"+8",
"+5",
"+12",
"+5",
"-11",
"-1",
"+21",
"-1",
"+9",
"+13",
"+4",
"+6",
"+3",
"+5",
"+4",
"+10",
"-4",
"-9",
"-3",
"-14",
"-1",
"+7",
"+7",
"+18",
"+11",
"+16",
"-6",
"+10",
"-6",
"+15",
"-7",
"-5",
"+9",
"+15",
"+26",
"-16",
"-4",
"-23",
"-17",
"-14",
"+3",
"+3",
"-5",
"+1",
"-18",
"-4",
"+17",
"+1",
"-11",
"-17",
"+16",
"-11",
"-1",
"+19",
"-1",
"+7",
"+21",
"-26",
"-4",
"+19",
"+17",
"+12",
"-20",
"-14",
"+21",
"-20",
"-22",
"-23",
"-15",
"+3",
"+5",
"-18",
"-8",
"-17",
"-2",
"+10",
"-12",
"-7",
"-5",
"-15",
"+11",
"-17",
"-7",
"-10",
"+11",
"+14",
"-18",
"-6",
"-3",
"-6",
"+17",
"+15",
"+3",
"-7",
"-12",
"+25",
"+23",
"+13",
"-6",
"-10",
"-24",
"+7",
"-14",
"+8",
"-14",
"-2",
"-21",
"-10",
"-3",
"-20",
"-10",
"+2",
"+16",
"-12",
"+9",
"+9",
"-16",
"+17",
"-26",
"-18",
"+10",
"-7",
"-2",
"-16",
"+6",
"+18",
"+5",
"-30",
"-3",
"-18",
"+19",
"+12",
"+17",
"+35",
"+13",
"+16",
"-11",
"+17",
"-8",
"-2",
"-8",
"-5",
"+8",
"+29",
"+16",
"-1",
"-36",
"+8",
"-52",
"-6",
"+148",
"+18",
"-20",
"+15",
"-10",
"-10",
"-9",
"-6",
"+12",
"-5",
"-18",
"-9",
"+37",
"-16",
"+18",
"-20",
"-4",
"+26",
"+11",
"-18",
"+4",
"+11",
"+2",
"+20",
"-27",
"-15",
"+43",
"+50",
"+4",
"+17",
"+21",
"-1",
"-1",
"-11",
"-60",
"+137",
"-23",
"+52",
"+14",
"+11",
"+8",
"+24",
"+13",
"+86",
"+31",
"+321",
"+68009",
"-18",
"-17",
"+14",
"+17",
"-12",
"+11",
"+10",
"-8",
"+19",
"-2",
"+6",
"-1",
"-15",
"+17",
"-19",
"-19",
"-5",
"-18",
"-12",
"-8",
"-20",
"+3",
"-10",
"+6",
"-15",
"-5",
"-2",
"-137857"
]

let test = ["+3", "+3", "+4", "-2", "-4"]

freqs = freqs.map(f => {
    return {
        sign : f.substr(0,1),
        jump : Number(f.substr(1))
    }
})

let station = 0
let previous = [0]
let dupe = null

function run () {
    // console.log("run")
    freqs.forEach(freq => {
        station = freq.sign == "+" ? station + freq.jump : station - freq.jump
        if (dupe == null){
            searchForDupes()
        }
    })
    if (dupe == null) run()
}

function searchForDupes (){
    let idx = previous.indexOf(station)
    if(idx != -1){
        dupe = station
    } else {
        previous.push(station)
    }
}

run()

console.log("final", dupe)
