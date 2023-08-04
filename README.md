# Wetonizer Web-App

Available at https://wetonizer.vercel.app/

## Next JS + TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Javanese Calendar System

I hardcode (as variable) the kurup (120 years cycle) to 24 March 1936, which the day when kurup Asapon began. Often time, the kurup cycle is determined by kasultanan yogya or mataram, so i think hardcoding should be the best option. The next kurup will happen in year 1986 Javanese (or maybe sooner). 

More info about javanese calendar:
1. [Wikipedia Bahasa Indonesia, kalender jawa](https://id.wikipedia.org/wiki/Kalender_Jawa)
2. [Basic algorithm kalender jawa](http://kalenderimlek.blogspot.com/2017/11/warsa-lambang-dan-windu-dalam-kalender.html)

## About Algorithm
Although javanese calendar is hardly based on hijri (islamic) calendar. It's not really the same. So taking gregorian to hijri algorithm and rename the name of month to javanese one often time get a pretty bad result.

Everything is calculated from the days from epoch time to input date. Using some declarations (or definitions) taken from Wikipedia article above, i can calculate any value in javanese calendar (except Kurup).

In the code I use the term 'biasa' and 'kabisat'. Biasa (Javanese:wastu) is an usual year, and kabisat (Javanese:wuntu) is a leap year

## About `hariid/idHari` and `pasaranid/idPasaran`
I suppose you know a little bit about javanese calendar from articles above. I take idPasaran and idHari from Epoch time (24 Mar 1936), not from UNIX Epoch.

| ID  | Hari   | Pasaran |
| --- | ------ | ------- |
| 0   | Selasa | Pon     |
| 1   | Rabu   | Wage    |
| 2   | Kamis  | Kliwon  |
| 3   | Jum'at | Legi    |
| 4   | Sabtu  | Pahing  |
| 5   | Minggu | -       |
| 6   | Senin  | -       |

## TO-DO
- [ ] Dina ala as in this [article](https://primbonjawa21.blogspot.com/2019/01/dina-ala-twangke-samparwangke.html)