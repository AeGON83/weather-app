# Public deployment

https://weather-app-five-hazel-98.vercel.app/

## Screen shots

![ss 1](./public/ss1.png)
![ss 2](./public/ss2.png)

# My Next.js Weaher app Project Setup

Follow the steps below to set up your Next.js project:

## Clone & Run the Repository

First, clone the repository to your local machine using the following command:

get openweather api key and put it into .env.local file with key NEXT_PUBLIC_OPEN_WEATHER_MAP

### dont be worried your api key will not be exposed to client and can not be ispected in nework tab also

```bash
git clone https://github.com/AeGON83/weather-app.git
cd weater-app
npm install
echo "NEXT_PUBLIC_OPEN_WEATHER_MAP=<your api key>" > .env.local
npm run dev
```
