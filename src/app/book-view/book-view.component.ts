import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {

  books:any=[
    {
    "title": "Daivathinte Charanmar",
    "image": "https://images-eu.ssl-images-amazon.com/images/I/41bxJpP3H9L._AC_SX184_.jpg",
    "author": "Joseph Annamkutty Jose",
    "language": "Malayalam",
    "price": 130
    },
    {
      "title": "When I Am With You",
      "image": "https://m.media-amazon.com/images/I/61R-HtwVuYL._SX322_BO1,204,203,200_.jpg",
      "author": "Durjoy Datta",
      "language": "English",
      "price": 230
      },
      {
        "title": "You Can",
        "image": "https://m.media-amazon.com/images/I/4180omRGrSL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
        "author": "George Matthew Adams",
        "language": "English",
        "price": 200
        },
        {
          "title": "12 Rules for Life",
          "image": "https://m.media-amazon.com/images/I/412ML1Yah7L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
          "author": "Jordan B. Peterson",
          "language": "English",
          "price": 383
          },
          {
            "title": "The Diary of a Young Girl ",
            "image": "https://m.media-amazon.com/images/I/41cldPX8BxL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
            "author": "Anne Frank",
            "language": "Hindi",
            "price": 540
            },
            {
              "title": "Alchemist",
              "image": "https://m.media-amazon.com/images/I/41tm1PWX2fL._SX319_BO1,204,203,200_.jpg",
              "author": "Paulo Coelho",
              "language": "Malayalam",
              "price": 230
              },
              {
                "title": "One Day, Life Will Change",
                "image": "https://m.media-amazon.com/images/I/418ky++EMuL._SX258_BO1,204,203,200_.jpg",
                "author": "Saranya Umakanthan",
                "language": "English",
                "price": 270
                },
                {
                  "title": "Sherlock Holmes Kathakal",
                  "image": "https://m.media-amazon.com/images/I/51eoGjuylTL._SX318_BO1,204,203,200_.jpg",
                  "author": "Arthur Konan Doyle",
                  "language": "Malayalam",
                  "price": 230
                  },
                  {
                    "title": "Autobiography of A Yogir",
                    "image": "https://m.media-amazon.com/images/I/41atjIKmxxS._SX460_BO1,204,203,200_.jpg",
                    "author": "Paramahansa Yogananda ",
                    "language": "Hindi",
                    "price": 270
                    },
                    {
                      "title": "A Story Can Change Your Life",
                      "image": "https://m.media-amazon.com/images/I/51njDbGYRfL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
                      "author": "Ritu Singal",
                      "language": "English",
                      "price": 399
                      }
  ]

}
