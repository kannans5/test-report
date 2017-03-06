export default function() {
  this.get('/reports', function() {
    return {
      data: [{
        type: 'reports',
        id: 1,
        attributes: {
          date: '3-1-2017',
          tests: 200,
          passed: 199,
          failed: 1,
          image: 'https://d.gr-assets.com/books/1386924361l/11297.jpg',
          details: 'This test ran on foo-bar-date.'
        }
      },
      {
        type: 'reports',
        id: 2,
        attributes: {
          date: '3-2-2017',
          tests: 200,
          passed: 200,
          failed: 0,
          image: 'https://d.gr-assets.com/books/1386924361l/11297.jpg',
          details: 'This test ran on bar-date.'
        }
      }
    ]
    };
  });
}
