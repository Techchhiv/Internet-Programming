import proImg1 from '../assets/img/Cat-011.png'
import proImg2 from '../assets/img/Cms-031.jpg'
import proImg3 from '../assets/img/Cms-041.png'

export default{

    data(){
        return{
            Category:[
                {
                    img: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1701043200&Signature=nuVEq7Nzd19AIxIRLLEjSJVotSwf1Q0KQbNAiYbVgkNE3TOSq~ucJVycCTxCBYmbQQdUFEH5WfXShv-62DUKyiJPEpJD29tHB87AHvsFgxqc1iCXQ2L-10rCI~VY5yKs4GnpjD98VMyHdWy8aZo47gyn~IHBalBQRlRe5DUcvWVHazK98rv7d5gj3VyJgV7vjk6-8~EUVgXeP~chDa0uHx-PW7MZj3rr6~iZKQg9flxnR0FZ9w-CdzTmTf6YIn0i3UmwLbVzguHod5Oc-IYPVZ686Of4bNdPQQ6HEenKixqLqqLwAeF7MY4hsEpOzuL5Er2qhQBD2ysc79Qrw48x3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "14 items",
                    ItemName: "Cake & Milk",
                    bgColor: "#F2FCE4"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1701043200&Signature=pJmjSAv83QimcuIG72nCNXlteOQAfTnga3FBqQAYSrQaYVGmTBOf6MZnPztVC6~7TSEazb1mNECezHkYjit02Y5mszQ5Gv6lfzgSiMmrllSqyhiZ6C9wx7P1DTJiltNv1lKqYD~z6jcnAQvcL7OxiLnLwKPozj1sSjXdEY8NV5nqy4nu03ZaOUh1DIZCXotAjC6Un0qr4mY8sQ5N1GnwUuZWipeHZ9mTWzXFYfWw2T3dG5RIjoE6uXREuWA4KYdDsMxYMANvr3fjNQp8yVQsllcJS47Det69Yw31CfmZ7TYCtVAOUTSx~A3VG9FM~Qdux4DUzPQwGv8d4wEEgYD4jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "17 items",
                    ItemName: "Peach",
                    bgColor: "#FFFCEB"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1701043200&Signature=qByOdc2Q1X2NFdyrUeztm6EPT9VGoOX6aob66DaYigWyiPcDvDxDOD7qrj7~xlrj-69C8A1xlBY4F8B3FLi6UE~4COX72Nd3IotG3-cjazvOZkOK0yjv32bc4eN-2ravsCdu8avOdTqzciVATjspi57zfpVc-1BHUKxa9UsJOzzLwFwuv~C7sgwDMqhtaXLFCzKJLXsJ3s2pzqOTlU~VfnDkKIiUJDbG7dApsLWYxmf1V7Ajxh6x24ZDvDF6p-4MAVVgPWMC1XW93Y8sh9AfiltKhUdUw4USN3ImgDtWEsf0Qs54kbllOkGsTaHEfshWGoiwa2RRnlWe1jWu~ECA8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "21 items",
                    ItemName: "Oganic Kiwi",
                    bgColor: "#ECFFEC"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1701043200&Signature=gDrZIVRru4Xf7EFvOaJVa4zMaK34T89ooaYiiy0jHrv964HOgcNHySwHRI5tkzWDuLzCxG6-br~aNpZQg~UmRpJXt5s9njR2-BigWxO5MsyxH9KYjg9LZijaX7ytULJYu2MvLT1IRJrsU5n1xRrPrYZKf-AGOTymzm9ktMqPTe0UwT6PtEYQkVQCo71QGuV2g6AT3kTa8EwuslwSsamcDLB-5e9xa85jGRMRVvgTVdT1i4uvnHvo4TBfrH3fj1QFayytVdc~tBwW3SBRN2ZmTRnxDD-c1v4~mnvDKYrvNr9r-zoytKQZ~3IBqxh0juQdNIPFL3Wfobh2P-T5Z~lh3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "68 items",
                    ItemName: "Red Apple",
                    bgColor: "#FEEFEA"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1701043200&Signature=ZTDPY7B01efjpBqFLuHwk~Pg5VXX0cxe9J3pgleHiJrNskdw4l5vtQOUUS9f~BS39NhifrWsQBJSdRmJ4ffGs3OWQYwy91Wi6LymiGCq5P02FAtTNL65RQRZs4P2CbHqnMp8QMzWMIbWXsMVDgA-obIjY2ARIjp9OtRN1O6s3eL5uYVmwOzTFNx0S6LZBjeDTRntin7~LEYoDUeqhb3xGyXpxeGSgUSRR9twcPdtmctH3q1Z2fz7sYMrDZCrUI8aY4-LXkZFLunBQQFCArSRpyhtEVFarrTxDGIywWSjkeG9QsVPv56RBxrOEKfvIsqp9vkBOwjc-I09vMysym8qEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "34 items",
                    ItemName: "Snack",
                    bgColor: "#FFF3EB"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1701043200&Signature=S7xJJ2tNncqoFtfs0z49egQAhXp68WqXLqkKTd6iNqcX3dBe4VXW~0su0UwkKM5UuZzel51xlYQARTxfk6WGSm7Ny~CDaaMnClTd6oB917Wf~5-ALMdJjPQ2Xw~6cWxFZdtoEGMFGVSmK0CN~OeQviLSaiV2txUMPV7WaY9onC6M3NaAw1t7J231BGpJQoNeshOhAWuaOwm0X5TBmRHvMdthLe0UgdvjRS009zbvz-VKZ0k2ySDZ~4lu6qZt1KLpYm7blzbEFANdKwuzO5AiaEdoFz4CRQre0Dh46pzNcj18eiCeAbI8SDc6kR3qi7ocvE0bIGe4kQdRsiJgszQfQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "25 items",
                    ItemName: "Black Plum",
                    bgColor: "#FFF3FF"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1701043200&Signature=jU~KGSCuxDZGaLS4p~Vhsve5DzsdY4MRm-GTsUC3hEAfHAy1xS-k9MYt15epdPytx4i1LVIFYGe9Bwbb-05S~UozKrJXPGNLO5kvn6Ci2O76VuDsYGXlT~YIbykAhMo26jzKZL-Wjh1T1gW36~g1t~nAFzW0cCjjwS62SOdo7JqqfcoA3Wl~G839qkElsj1OI~tzTQ8jHk4mXwyZVtBvu4PugxCZhyqP1vbmgCIS8IBesU8ZcB-P10L1FH-ydo-QKfxFn02nAALdg9DUDQcqa5ivHktuspJfVCRaZFF911cSVYEUmH5RH9dIzdWRggtT1pn~sCYCEqlTMyiDprJVtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "65 items",
                    ItemName: "Vegetables",
                    bgColor: "#F2FCE4"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1701043200&Signature=hrxIqePlHrVgOqGbOzXbpuZgoQl5KndljWGx5jMYf4gLll7Q~jR3fuRxAkwSRtkcComhPSR1UHNMurnw8fXV93jBJckQfXGBluo0A-dX9YEHEkmjtU6GSy~fc4m99cyUr82uaX2xoBW1h~qHFqHLEfH~fr12p471~VE5VO~oadkM6NbcFgHAkwPkjY~xLGvhjmSTJ03deKpSiwDEmV17TCntJvGfJrjg3LCQivogaZ8-CQQfyvpP5wwGScvRkQeeKMgQZ49wS8uYxd0X9l9hDO6NQhwjOQmq8uxHw4shPKfscaMxCMpRQin8r1RPKj-jC0eu4ipWU3gAG2uE1x2bDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "33 items",
                    ItemName: "Headphone",
                    bgColor: "#FFFCEB"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1701043200&Signature=ku2-TlVzwdx8vQkO5evcQ9lYiZ7pa25hkkW~W8Q4dUamLcd79akJ3MAiaKJm1L1dBk9pRr5bHMkaL2QyDLuBam5P~ww2zQTjKYF9vb8m1c~ZKqxx2XzcO-ivWYaUNN2dy6qm1hTnErhQWVOpvXZ3Cb5IH3~zraXFob1Sa4IQH8Tpq7UJ4V462dFFdByy4rfa8~ws34AzoKn9QTGWKlaYZYOaUqyqI7n9z843StdY7QyjF4v382hFdccYx8WeIdKAanH9Ii~gj2E-pnmbPUzmSrwLQp4mhomR3lNM0mh-emOmuFjzrBHNOOAvdBs-gltESpCUi4stDgQucLmtwkwQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "54 items",
                    ItemName: "Cake & Milk",
                    bgColor: "#F2FCE4"
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1701043200&Signature=JxcqdQZEapxcGc0zHoFUSJ2YOsHK6I1G2x54vW-7pk2K1FJWR27dJrRhoXt3Xt6fcpIXJsCVBX-kS-83PcZTJb-XNIIoZdxJzjml~HLHKcDtXpNrj2DQzfjFDaIQhrdOgSg~j7mYmiFgexGhJtc8jfFWCExCVN7ekRGMrVbr7zIcBDNuCx-WDyTfGOA8YxMJLwU4G~plPCReD2kyUiIuGfNu2EAIVdnz0rTqx175IbGJfEBJMVaCUSY-MJQpv1eqNfmGCkUKu8KWWuYdGUmjJW-azdxcUvIoiMjl~rO7328PmpATd4jsjZdUScn3XAsYbn6gWKHFIt1GA4LGcVkbBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    itemCount: "63 items",
                    ItemName: "Orange",
                    bgColor: "#FFF3FF"
                },
            ],
            Promotion:[
                {
                    img: proImg3,
                    text: "Everyday Fresh & Clean with Our Products",
                    bgButton: "#3BB77E",
                    bgColor: "#F0E8D5"
                },
                {
                    img: proImg1,
                    text: "Make your Breakfast Healthy and Easy",
                    bgButton: "#3BB77E",
                    bgColor: "#F3E8E8"
                },
                {
                    img:proImg2,
                    text: "The best Organic Products Online",
                    bgButton: "#FDC040",
                    bgColor: "#E7EAF3"
                },
            ],
            ProItems:[
                {
                    img: "https://s3-alpha-sig.figma.com/img/17d8/db7f/3d627d5dff7a21f5589732970e0ecc60?Expires=1701043200&Signature=T1ym21wgpOMeSHRpW04M4XROxNTB4KIcR~YzLbvHDTE0OGWDHWjF15cDB4oGQLmPIsU7JQ7ygIjU9zfxEhaxc0Chx8W3uRdvT0rbujS~XDsYwXMCV0TKtn054r-9WQHlVZRZ0wTEpbsuGOKD9~6G35aN1Bhsr2Qb4CwwrUDiFwmjkrRDETfHCkdGqKpEk7nOd4i3Sw3IB1ln1LQa-Z6K3eW4PRHE1SE63TCGLFNpZay1dx-QFrDhbTkxjkd8ZsKgR11PCnrHTpvR43MhF7CRYWpTtNHOe8hmb6SnpvlkRgkoBGywJgVfMZ6DG0rXzJYLWoPEfeU4rk56xK4r2HaPCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                    
                    dis: "-17%",
                    bgColor: "#3BB77E",
                    show: "active",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/2460/9b48/1186872b4c861e65b3ad6f46536a194f?Expires=1701043200&Signature=f814fBBaAMJJOpsj9xsQ-65vcDX97-1lbh8eeQ4JeOCo301NaKiYHKzFofe6GiDfc6PuVHlQirbIbPhnrZS6D3nPECClhsnTUCJxQYNkx9prtoXmn62K~T9iZusgp3u3NAqaLf456oXV4HrroYBz908bSnrr5bQUxTwRM0UQzPV8cCQnm9QnrY0e6f~B7cWRO5ZBEg4JQYxLOQCZknJwSsxZSbX1a4cNFSemBRayaS1d~SDJqil4RK05gq0OSMJZcGU-Fh96kiVwl~FIHZNJdHJN6vDG0roHnFArw05hO9AVNlJcHqgusLetr8HQFeO~~bu4Y3TfOsf3WxaUjJxtQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "All Natural Italian-Style Chicken Meatballs",
                    
                    dis: "Hot",
                    bgColor: "#FD6E6E",
                    show: "active",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/8b45/4a65/7d09e0d193461fe0cf5fe4d9cba8cad9?Expires=1701043200&Signature=Kx31v92EQ~bnZT7F8SJTmgOFGmNs5J3Kr7WO29HBgCejDmmsWFI88Qr8O7ziP2iwqCRqmS6FyGNJK9wm5bEG2bc1T16Uop4HlbhIAXNQo69XLUTCn8D-Mu7Y~bjuIYgd6R1851rXj0foz2p1La5aFjkTTE9af1lusumskfhPyRHsmD~mOx79B1zV27vIll02jbI2dOhUE5~~ZVXWOH5HPmoW~lDDoi8-iWgQqeylto6W-~~MyxtNLqR0Cc~HQBRm67MFNNgJWNdoo5sm2CHdP02Wf0pVPosTXaeR-55Vkviwqub5-Vuj6OW~E4~RsoSVGp1xCB-L5-oibjs2QyPvWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                    bgColor: "#FDC040",
                    dis: "Sale",
                    show: "active",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/40ab/8386/1edbcb39cf2b176a6b5084a096d0c9a4?Expires=1701043200&Signature=Knm6W0jRSjH4u~GuBqK1OAsJSUdFPg9tUubRmCHPHJuSzEdyVDhPw6k3NCHI7h98w13RpnUaorS~V~wJ0QJoa3XhtEBMgteFY2PvgOkdzLZlFiYxzPAPgcijiE29-9WCR7Y1cNBFMkLesy2WkeJFyz84PM~~QIiwKM3Y2PBX-7VRpN51RRd3A2FS6iL3e-CbR24YDJY9REsu0nq9jZ0PaLjtRcnAxogsZHfGRDANFUUYze4D85FVofOAjyojIg4lk7zKOdB6E~zUOuSr8t-kJqH1h-UuZqcWeIzyIW7r3uHNG9wDx1sEKG6W02T8-WeSfpVkjhJd-OzEAJq~dBqQow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Foster Farms Takeout Crispy Classic Buffalo Wings",
                    dis: "-17%",
                    show: "",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/2d48/0a8f/210cdb0f5871f9d6dc633450452ab720?Expires=1701043200&Signature=Y-Xa7bKLU0IyQZiqTrMOO9iP0j~eJOobiFVPDyxYfERbEVnIfaA3y79oqp~CV1oWQlRXrSV6qzbNaoTCu-hEYXQRMxVx03xWav7C~DCworY3-Sb7e9k6HpmCSUUN64gMhlQK~QLUOIpPYqrGsZZBuyvKb2ZVsXmZ~pzk8v939KB4bWSOSXPj1zPzmgsKFd8Vexpn85maR-7~dizEAnZzoHst1-2W~D2YrbpYzofCbov7pggl2GxL67wgdOXz19qasroArL54gnkujBQhqo4bT3f5ADmR9v7gn2jkrWNRXzs9M63N8RAJ6iFpKGjiS~fqpfiq4AR6wrtEQd4lE2VNxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Blue Diamond Almonds Lightly Salted Vegetables",
                    dis: "-17%",
                    show: "",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/4c35/37e0/b383c32aa0cf53ae7651240f5bb90bbf?Expires=1701043200&Signature=C-3ptHV7JoSsQriJ~pFDNEjSXWgsvAtQYCOJ1c5tnU-y-ETuN6UNNCR6qpw1RWsd4lAt~3obGs4b3cU4tuE~7bmolGDoHh8Q0OsWe6asWRsuc7GPyxVCS02MR8o2fH5ZwAl2Fid-Qj8VynGU~CCYJQYPrmL-J4Sk6OJ5WY8hiVsvIQj9MnMIJVF08SxgJ4sW7owMdavpzsxgW1E7qEKSBrwhatLgs78dnmBdL0Lb1f3Bu4kxAfrEIO8M08L-l-kvdCc7Q4iKRONdZgiOQwn~IH-yGwUqwWoh9R5nyUH7l3sxulVLkXYL2ih20A9mLbcX8Qif0JJp~ait4NuCLhHcHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Chobani Complete Vanilla Greek Yogurt",
                    dis: "-17%",
                    show: "",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/2190/48fe/84dbf34790f69cce601604ba8d38d582?Expires=1701043200&Signature=o5X9yt98el2lRZhztDj5z5ns0T3DzDR~hvqPD8I470y9NtQC8pZ75v13IZYjFzpXLTdZa48hGHejBIUBVsKrHSzL0PVokj-TqbSYxd4nsW8y4Jxvm8yPoQXXULrGMTUSgQJbwi0tpRFW7pyAosxl61SYUz~lJNy1~7pS97emEUYOmd3Ii9rcYOgXJNdVr2l4NSAYelL~lm8x7Mvt~iMuqgozLnVUTH9SeCV5ErZHcbqo0YqGPb8-qVN~t-C7kMn74TYikTA2eTzB-CTLBJIpDnnMrbTb2doMrzsGczBKhEtBbaJ0-1WHM3hPUSEjBxZZfu3n94JkWdpyQOQOlddx2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
                    dis: "Sale",
                    show: "active",
                    bgColor: "#F6C851",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/b276/d8b7/833567cc5ca946f1cf51704fd32be2e4?Expires=1701043200&Signature=ERqWLKNHMp0WwDP-rxyY6qR3h1jePgcdbOh3Pmoi5VE3KeKsyGvSNAzIdBiquAtTHKqi~E3Bj~p4Xb2iWLnF9jApQ1n-aYMz~fKqPB07pnN4fNlviYYZUBeAWH6Y8IsIwZI4a6E8qpaCas9TzXsTFim8icqAUFTSmxbfrrL3IwImR3vT-9EwTo6pq8w5NWb2B3C8Scbsc55UWxW817ekP4U0SWCMdfbK8tLcYj~7fdLwJCdAuB1be8b~vg9KLXAEz2CGTCe-VDTtvPZsauuwXtWT5h1H8c-YAZ-V6kPpe4Ln-SuuXyHNsMwRAwtIUkJ0FRaIuCXZaZCKx5go-IAUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Encore Seafoods Stuffed Alaskan Salmon",
                    dis: "-17%",
                    show: "",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/53b7/049c/d4d87292c3766771cdc858ab456c1e20?Expires=1701043200&Signature=YubvKHwfLNrmQC9wDoEaWWnmFyZTFtmwws4tJ0aHyh4pUOg8mfvzUv1xfvWiFq-GTm0cbN03wX04z2DQxBQTzVGaVHufDFRd3A3AAySDA2c7ZB3tzOkh6QvHJ5UWLxg8weeJaetbq1cTEUevQVCFafkJ~kCs2nWzBVkN5LiiWfCX-CWWhhixgba2ziB9qkzLbi6bGdOhwt~ro6JHnsnSJEt6LJ1T7yBux4k8eE1Rw6WSBHp8Vp3I3Pn8DSJM5T6sWBNfl6C8~MzaAl4MX7zvyWW4imI79M1a0XYJ7jDFm8NLuFFtbAcvtlKQ5gcUwG3V9EummukXrvJw4PgeMrqnEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Gorton’s Beer Battered Fish Fillets with soft paper",
                    dis: "-17%",
                    show: "",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/6667/38db/f36fd0ac0722f68e84acd3769588855f?Expires=1701043200&Signature=WYS38HUC9aElWvB8guaqQFjGEukX32x8hm4Ub13tpQPphMIBxpkKFQ5NthQc45CriUsWO-MdmQloVgYLO~~Fz3PEEwCQmrxIUGGjCE-qk~YPrzXFC3DdL3MzX8gBBdSKK-O2RuA5cW6kPRNM-60i9SP54JIc7KwSzm9SBfV5Z98FD5Y1ot9UQLt2k3YmSlsTk0fmWORG3kdf113N0NPJ2q8QHYIkNqjuKmITuAZg5FzTvGqFB5JREB6jgrNGSFuwubYYywzI-gVILv9gOc2urmN2MfP5k3AZf-7w6AA0mpx6mqSoWUvgWQA6glFlAVuW9l7Y~XinyPGLlFqf5wFDgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    text: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
                    dis: "Hot",
                    show: "active",
                    bgColor: "#FD6E6E"
                },
            ],
        }
        
    }
}