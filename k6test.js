// import http from 'k6/http';
// import { sleep, check } from 'k6';

// export default function () {
//   http.get('http://test.k');
//   sleep(1);
// }
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';
export const errorRate = new Rate('errors');
export const options = {
  stages: [
    { duration: '30s', target: 400 },
    { duration: '1m', target: 400 },
    { duration: '30s', target: 800 },
    { duration: '1m', target: 800 },
    { duration: '30s', target: 1200 },
    { duration: '1m', target: 1200 },
    { duration: '30s', target: 1600 },
    { duration: '3m', target: 1600 },
    { duration: '2m', target: 0 },
  ],
};
export default function() {
  const url = `http://127.0.0.1:9022/listings/${Math.floor(Math.random() * 10000000) + 1}/mortgage/`;
  const res = http.get(url);
  const result = check(res, {
    'status is 200': (r) => r.status === 200,
  });
  errorRate.add(!result);
  sleep(1);
}