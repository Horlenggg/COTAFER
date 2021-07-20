if(document.querySelector('#tableDashboard')){
    let tableDashboard = new Tabulator("#tableDashboard", {

        // headerSortElement:"<i class='fas fa-arrow-up'></i>",

        resizableRows: false,
        resizableColumns: false,
        responsiveLayout: false,
        virtualDomHoz: true,
        layout: "fitColumns",

        pagination: "local",
        paginationSize: 10,

        data: [
            { articles: 'Biden says he would establish White House national', publish_date: '01/11/2020', share: 103, comment: 300, view: 0, mood: 300},
            { articles: 'Biden says he would establish White House national', publish_date: '02/11/2020', share: 103, comment: 300, view: 0, mood: 300},
            { articles: 'Biden says he would establish White House national', publish_date: '03/11/2020', share: 103, comment: 300, view: 0, mood: 300},
        ],

        columns: [
            { title: 'Articles', field: 'articles', minWidth: 360 },
            { title: "Publish date", field: "publish_date", width: 140 },
            { title: "Share", field: "share", sorter: "number", width: 120 },
            { title: "Comment", field: "comment", sorter: "number", width: 120 },
            { title: "View", field: "view", sorter: "number", width: 120 },
            { title: "Mood", field: "mood", sorter: "number", width: 120 },
        ]
    });
}