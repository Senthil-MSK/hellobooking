import moment from "moment";
export const data ={
  "range": {
      "startDate": "02/12/2022",
      "endDate": "31/03/2023"
  },
  "headers": [
      {
          "id": "1",
          "title": "milestone",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      },
      {
          "id": "2",
          "title": "Gillian",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      },
      {
          "id": "3",
          "title": "Gillian",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      },
      {
          "id": "4",
          "title": "Gillian",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      },
      {
          "id": "5",
          "title": "Gillian",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      },
      {
          "id": "6",
          "title": "Gillian",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      },
      {
          "id": "7",
          "title": "Gillian",
          "rightTitle": "Prosacco",
          "bgColor": "#c5fca1"
      }
  ],
  "items": [
      {
          "id": "0",
          "group": "6",
          "title": "Kitchen Cabinet",
          "scheduleChanged": false,
          "start": moment().startOf('day').valueOf(),
          "end": moment().add(6, 'day').startOf('day').valueOf(),
          "className": "weekend",
          "itemProps": {
              "planned": {
                  "startDate": "02/12/2022",
                  "endDate": "02/17/2022",
                  "workDays": 5,
                  "progress": 50
              },
              "actual": {
                  "startDate": "02/12/2022",
                  "endDate": "02/20/2022",
                  "workDays": 8,
                  "progress": 40
              }
          }
      },
      {
          "id": "1",
          "group": "6",
          "title": "Kitchen Cabinet",
          "scheduleChanged": true,
          "start": moment().startOf('day').valueOf(),
          "end": moment().add(2, 'day').startOf('day').valueOf(),
          "className": "",
          "itemProps": {
              "planned": {
                  "startDate": "02/12/2022",
                  "endDate": "02/17/2022",
                  "workDays": 5,
                  "progress": 50
              },
              "actual": {
                  "startDate": "02/12/2022",
                  "endDate": "02/20/2022",
                  "workDays": 8,
                  "progress": 40
              }
          }
      },{
        "id": "2",
        "group": "2",
        "title": "Bathroom",
        "scheduleChanged": false,
        "start": moment().add(1, 'day').startOf('day').valueOf(),
        "end": moment().add(3, 'day').startOf('day').valueOf(),
        "className": "weekend",
        "itemProps": {
            "planned": {
                "startDate": "02/12/2022",
                "endDate": "02/17/2022",
                "workDays": 5,
                "progress": 50
            },
            "actual": {
                "startDate": "02/12/2022",
                "endDate": "02/20/2022",
                "workDays": 8,
                "progress": 40
            }
        }
    },
    {
        "id": "3",
        "group": "2",
        "title": "Bathroom",
        "scheduleChanged": true,
        "start": moment().add(1, 'day').startOf('day').valueOf(),
        "end": moment().add(2, 'day').startOf('day').valueOf(),
        "className": "",
        "itemProps": {
            "planned": {
                "startDate": "02/12/2022",
                "endDate": "02/17/2022",
                "workDays": 5,
                "progress": 50
            },
            "actual": {
                "startDate": "02/12/2022",
                "endDate": "02/20/2022",
                "workDays": 8,
                "progress": 40
            }
        }
    },{
      "id": "4",
      "group": "3",
      "title": "Bathroom",
      "scheduleChanged": false,
      "start": moment().add(-1, 'day').startOf('day').valueOf(),
      "end": moment().add(3, 'day').startOf('day').valueOf(),
      "className": "weekend",
      "itemProps": {
          "planned": {
              "startDate": "02/12/2022",
              "endDate": "02/17/2022",
              "workDays": 5,
              "progress": 50
          },
          "actual": {
              "startDate": "02/12/2022",
              "endDate": "02/20/2022",
              "workDays": 8,
              "progress": 40
          }
      }
    },
    {
      "id": "5",
      "group": "3",
      "title": "Bathroom",
      "scheduleChanged": true,
      "start": moment().add(-1, 'day').startOf('day').valueOf(),
      "end": moment().add(2, 'day').startOf('day').valueOf(),
      "className": "",
      "itemProps": {
          "planned": {
              "startDate": "02/12/2022",
              "endDate": "02/17/2022",
              "workDays": 5,
              "progress": 50
          },
          "actual": {
              "startDate": "02/12/2022",
              "endDate": "02/20/2022",
              "workDays": 8,
              "progress": 40
          }
      }
    },{
      "id": "7",
      "group": "4",
      "title": "Floor Cleaning",
      "scheduleChanged": true,
      "isCompleted": true,
      "start": moment().add(-2, 'day').startOf('day').valueOf(),
      "end": moment().add(1, 'day').endOf('day').valueOf(),
      "className": "",
      "itemProps": {
          "planned": {
              "startDate": "02/12/2022",
              "endDate": "02/17/2022",
              "workDays": 5,
              "progress": 50
          },
          "actual": {
              "startDate": "02/12/2022",
              "endDate": "02/20/2022",
              "workDays": 8,
              "progress": 40
          }
      }
    }
  ]
}