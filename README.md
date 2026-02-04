<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAB 2026년 1월 출석 분석</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(135deg, #1e272e 0%, #2c3e50 100%);
      min-height: 100vh;
      padding: 28px 20px;
      color: #ecf0f1;
    }
    .container { max-width: 1400px; margin: 0 auto; }
    .header { text-align: center; margin-bottom: 24px; }
    .header h1 {
      font-size: 28px; font-weight: 700; color: #ecf0f1;
      margin: 0; letter-spacing: -0.5px;
    }
    .header p { color: #95a5a6; font-size: 13px; margin: 6px 0 0; }
    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    .card {
      background: rgba(44, 62, 80, 0.6);
      border-radius: 10px;
      padding: 14px 10px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }
    .card-label {
      font-size: 10px; color: #95a5a6;
      text-transform: uppercase; letter-spacing: 0.8px;
      font-weight: 600; margin-bottom: 6px;
    }
    .card-value { font-size: 20px; font-weight: 700; margin: 6px 0 0; }
    .card-sub { font-size: 10.5px; color: #7f8c8d; margin: 3px 0 0; }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }
    .panel {
      background: rgba(44, 62, 80, 0.6);
      border-radius: 12px;
      padding: 18px 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }
    .panel-title {
      font-size: 14px;
      font-weight: 700;
      color: #ecf0f1;
      margin: 0 0 14px;
      border-bottom: 2px solid rgba(236, 240, 241, 0.2);
      padding-bottom: 8px;
    }
    .chart-container { height: 280px; margin-top: 10px; position: relative; }
    .chart-container-small { height: 200px; margin-top: 10px; position: relative; }
    table { width: 100%; border-collapse: collapse; font-size: 11.5px; }
    thead tr { background: rgba(52, 73, 94, 0.5); }
    th {
      padding: 8px 6px;
      border-bottom: 2px solid rgba(127, 140, 141, 0.3);
      color: #bdc3c7;
      font-weight: 600;
      text-align: center;
      font-size: 10.5px;
    }
    tbody tr { border-bottom: 1px solid rgba(127, 140, 141, 0.2); }
    tbody tr:nth-child(even) { background: rgba(52, 73, 94, 0.2); }
    tbody tr:nth-child(odd) { background: rgba(44, 62, 80, 0.2); }
    td { padding: 7px 6px; text-align: center; }
    .insights {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .insight-card {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      background: rgba(52, 73, 94, 0.3);
      border-radius: 8px;
      padding: 10px;
    }
    .insight-icon { font-size: 16px; }
    .insight-text {
      font-size: 11px;
      color: #bdc3c7;
      line-height: 1.5;
      margin: 0;
    }
    @media (max-width: 768px) {
      .cards { grid-template-columns: repeat(2, 1fr); }
      .grid-2 { grid-template-columns: 1fr; }
      .insights { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>🏊 PAB 2026년 1월 출석 분석</h1>
      <p>분석 기간: 2026년 1월 1일 ~ 1월 31일 | 기준: 1월 중순 시간표 (565명)</p>
    </div>

    <!-- Overview Cards -->
    <div class="cards">
      <div class="card">
        <div class="card-label">전체 등록 회원</div>
        <div class="card-value" style="color: #ecf0f1;">565명</div>
        <div class="card-sub">1월 중순 시간표 기준</div>
      </div>

      <div class="card">
        <div class="card-label">1회 이상 출석</div>
        <div class="card-value" style="color: #27ae60;">491명</div>
        <div class="card-sub">86.9% 참여</div>
      </div>

      <div class="card">
        <div class="card-label">0회 출석</div>
        <div class="card-value" style="color: #e74c3c;">74명</div>
        <div class="card-sub">13.1% 미참여</div>
      </div>

      <div class="card">
        <div class="card-label">평균 출석률</div>
        <div class="card-value" style="color: #3498db;">51.7%</div>
        <div class="card-sub">중앙값 46.2%</div>
      </div>
    </div>

    <!-- Lesson vs FreeSwim Cards -->
    <div class="cards" style="grid-template-columns: repeat(3, 1fr);">
      <div class="card">
        <div class="card-label">수업 출석률</div>
        <div class="card-value" style="color: #3498db;">60.1%</div>
        <div class="card-sub">월금/화목/월화목금</div>
      </div>

      <div class="card">
        <div class="card-label">자유수영 출석률</div>
        <div class="card-value" style="color: #9b59b6;">34.9%</div>
        <div class="card-sub">수/토/수토</div>
      </div>

      <div class="card">
        <div class="card-label">수업 vs 자유수영</div>
        <div class="card-value" style="color: #d4af37;">25.2%p</div>
        <div class="card-sub">수업이 더 높음</div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid-2">
      <!-- 출석률 분포 -->
      <div class="panel" style="grid-column: 1 / -1;">
        <div class="panel-title">📈 출석률 분포 (구간별)</div>
        <div class="chart-container">
          <canvas id="attendanceDistChart"></canvas>
        </div>
      </div>

      <!-- 출석 그룹 파이차트 -->
      <div class="panel">
        <div class="panel-title">🎯 출석 그룹 분포</div>
        <div class="chart-container-small">
          <canvas id="groupPieChart"></canvas>
        </div>
      </div>

      <!-- 프로그램별 비교 -->
      <div class="panel">
        <div class="panel-title">📊 프로그램별 출석 그룹</div>
        <div class="chart-container-small">
          <canvas id="programGroupChart"></canvas>
        </div>
      </div>
    </div>

    <!-- 수업 vs 자유수영 비교 -->
    <div class="panel">
      <div class="panel-title">🏊 수업 vs 자유수영 출석률 비교</div>
      <div class="chart-container" style="height: 240px;">
        <canvas id="lessonVsFreeswimChart"></canvas>
      </div>
    </div>

    <!-- 프로그램별 수업/자유수영 테이블 -->
    <div class="panel" style="margin-top: 16px;">
      <div class="panel-title">🏊 프로그램별 수업 vs 자유수영 출석률</div>
      <table>
        <thead>
          <tr>
            <th>프로그램</th>
            <th>수업 출석률</th>
            <th>자유수영 출석률</th>
            <th>차이</th>
            <th>비율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">월수금</td>
            <td style="color:#3498db; font-weight:600;">62.2%</td>
            <td style="color:#9b59b6; font-weight:600;">41.5%</td>
            <td style="color:#27ae60;">+20.7%p</td>
            <td style="color:#d4af37; font-weight:600;">1.5 : 1</td>
          </tr>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">화목토</td>
            <td style="color:#3498db; font-weight:600;">56.6%</td>
            <td style="color:#9b59b6; font-weight:600;">24.8%</td>
            <td style="color:#27ae60;">+31.8%p</td>
            <td style="color:#e74c3c; font-weight:700;">2.3 : 1</td>
          </tr>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">매일반</td>
            <td style="color:#3498db; font-weight:600;">61.4%</td>
            <td style="color:#9b59b6; font-weight:600;">38.1%</td>
            <td style="color:#27ae60;">+23.3%p</td>
            <td style="color:#d4af37; font-weight:600;">1.6 : 1</td>
          </tr>
        </tbody>
      </table>

      <div class="insights" style="margin-top: 12px;">
        <div class="insight-card">
          <span class="insight-icon">💡</span>
          <p class="insight-text">자유수영 1회당 수업 1회의 가치: 화목토반이 2.3배로 최대</p>
        </div>
        <div class="insight-card">
          <span class="insight-icon">📊</span>
          <p class="insight-text">월수금 단과와 매일반은 비슷한 수준 (1.5배 vs 1.6배)</p>
        </div>
        <div class="insight-card">
          <span class="insight-icon">⚠️</span>
          <p class="insight-text">화목토 단과 토요일 자유수영 출석률 24.8% - 개선 고려</p>
        </div>
      </div>
    </div>

    <!-- 프로그램별 상세 -->
    <div class="panel" style="margin-top: 16px;">
      <div class="panel-title">📋 프로그램별 상세 분석</div>
      <table>
        <thead>
          <tr>
            <th>프로그램</th>
            <th>전체 회원</th>
            <th>평균 출석률</th>
            <th>저조 (0-30%)</th>
            <th>일상 (30-70%)</th>
            <th>루틴화 (70-100%+)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">월수금</td>
            <td style="color:#95a5a6;">192명</td>
            <td style="color:#3498db; font-weight:600;">55.8%</td>
            <td style="color:#e74c3c;">69명 (35.9%)</td>
            <td style="color:#d4af37;">75명 (39.1%)</td>
            <td style="color:#27ae60; font-weight:600;">48명 (25.0%)</td>
          </tr>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">화목토</td>
            <td style="color:#95a5a6;">191명</td>
            <td style="color:#3498db; font-weight:600;">45.2%</td>
            <td style="color:#e74c3c;">76명 (39.8%)</td>
            <td style="color:#d4af37;">92명 (48.2%)</td>
            <td style="color:#95a5a6;">23명 (12.0%)</td>
          </tr>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">매일반</td>
            <td style="color:#95a5a6;">182명</td>
            <td style="color:#27ae60; font-weight:600;">53.8%</td>
            <td style="color:#95a5a6;">35명 (19.2%)</td>
            <td style="color:#d4af37; font-weight:600;">94명 (51.6%)</td>
            <td style="color:#27ae60; font-weight:600;">53명 (29.1%)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 3개월 장기 등록자 -->
    <div class="panel" style="margin-top: 16px;">
      <div class="panel-title">💰 3개월 장기 등록자 분석 (438명)</div>
      <table>
        <thead>
          <tr>
            <th>프로그램</th>
            <th>총 인원</th>
            <th>출석률</th>
            <th>수업 출석률</th>
            <th>자유수영 출석률</th>
            <th>저조</th>
            <th>일상</th>
            <th>루틴화</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">월수금</td>
            <td style="color:#95a5a6;">146명</td>
            <td style="color:#3498db; font-weight:600;">56.3%</td>
            <td style="color:#3498db;">62.9%</td>
            <td style="color:#9b59b6;">41.2%</td>
            <td style="color:#e74c3c;">66명</td>
            <td style="color:#d4af37;">59명</td>
            <td style="color:#27ae60;">21명</td>
          </tr>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">화목토</td>
            <td style="color:#95a5a6;">137명</td>
            <td style="color:#3498db; font-weight:600;">47.4%</td>
            <td style="color:#3498db;">58.1%</td>
            <td style="color:#e74c3c;">28.1%</td>
            <td style="color:#e74c3c;">59명</td>
            <td style="color:#d4af37; font-weight:600;">70명</td>
            <td style="color:#95a5a6;">8명</td>
          </tr>
          <tr>
            <td style="font-weight:700; color:#ecf0f1;">매일반</td>
            <td style="color:#95a5a6;">155명</td>
            <td style="color:#27ae60; font-weight:600;">55.8%</td>
            <td style="color:#3498db;">63.1%</td>
            <td style="color:#9b59b6;">40.7%</td>
            <td style="color:#95a5a6;">41명</td>
            <td style="color:#d4af37; font-weight:600;">90명</td>
            <td style="color:#27ae60; font-weight:600;">24명</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="header" style="margin-top: 24px;">
      <p style="font-size: 11px; color: #7f8c8d;">
        분석 기준: 2026년 1월 중순 시간표 (565명) <br>
        데이터 분석 결과. 이보형 팀장
      </p>
    </div>
  </div>

  <script>
    // Plugin for center text in doughnut charts
    const centerTextPlugin = {
      id: 'centerText',
      beforeDraw: (chart) => {
        if (chart.config.options.plugins.centerText) {
          const { ctx, chartArea: { width, height } } = chart;
          const centerX = width / 2;
          const centerY = height / 2;

          ctx.save();
          ctx.font = 'bold 20px Segoe UI';
          ctx.fillStyle = '#ecf0f1';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(chart.config.options.plugins.centerText.text, centerX, centerY);
          ctx.restore();
        }
      }
    };

    // Plugin for group boxes in bar chart
    const groupBoxPlugin = {
      id: 'groupBox',
      afterDatasetsDraw: (chart) => {
        if (!chart.config.options.plugins.groupBox) return;

        const { ctx, chartArea: { left, right, top, bottom }, scales: { x, y } } = chart;
        const groups = chart.config.options.plugins.groupBox.groups;

        groups.forEach(group => {
          const startX = x.getPixelForValue(group.start);
          const endX = x.getPixelForValue(group.end);
          const boxWidth = endX - startX + (x.width / x.ticks.length);
          const boxCenterX = startX + boxWidth / 2 - (x.width / x.ticks.length) / 2;

          ctx.save();
          ctx.strokeStyle = group.color;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 3]);
          ctx.strokeRect(startX - (x.width / x.ticks.length) / 2, top - 10, boxWidth, bottom - top + 20);

          ctx.fillStyle = group.color;
          ctx.font = 'bold 12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(group.label, boxCenterX, top - 15);

          ctx.restore();
        });
      }
    };

    Chart.register(centerTextPlugin, groupBoxPlugin);

    // 차트 공통 옵션
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#95a5a6',
            font: { size: 10 }
          }
        },
        tooltip: {
          backgroundColor: '#34495e',
          titleColor: '#ecf0f1',
          bodyColor: '#ecf0f1',
          borderColor: '#7f8c8d',
          borderWidth: 1
        }
      }
    };

    // 1. 출석률 분포 히스토그램 (그룹별 박스 처리)
    const attendanceDistCtx = document.getElementById('attendanceDistChart').getContext('2d');
    new Chart(attendanceDistCtx, {
      type: 'bar',
      data: {
        labels: ['0-10%', '10-20%', '20-30%', '30-40%', '40-50%', '50-60%', '60-70%', '70-80%', '80-90%', '90-100%', '100%'],
        datasets: [{
          label: '회원 수',
          data: [83, 38, 59, 60, 70, 76, 55, 64, 39, 20, 1],
          backgroundColor: [
            '#e74c3c', '#e74c3c', '#e74c3c',
            '#d4af37', '#d4af37', '#d4af37', '#d4af37',
            '#27ae60', '#27ae60', '#27ae60', '#27ae60'
          ],
          borderColor: '#2d3748',
          borderWidth: 1
        }]
      },
      options: {
        ...commonOptions,
        layout: { padding: { top: 30 } },
        plugins: {
          ...commonOptions.plugins,
          legend: { display: false },
          tooltip: {
            ...commonOptions.plugins.tooltip,
            callbacks: {
              label: function(context) {
                const value = context.parsed.y;
                const total = 565;
                const percentage = ((value / total) * 100).toFixed(1);
                return `${value}명 (${percentage}%)`;
              }
            }
          },
          groupBox: {
            groups: [
              { start: 0, end: 2, color: '#e74c3c', label: '저조 (180명, 31.9%)' },
              { start: 3, end: 6, color: '#d4af37', label: '일상 (261명, 46.2%)' },
              { start: 7, end: 10, color: '#27ae60', label: '루틴화 (124명, 21.9%)' }
            ]
          }
        },
        scales: {
          x: {
            ticks: { color: '#95a5a6', font: { size: 10 } },
            grid: { color: 'rgba(149, 165, 166, 0.1)' }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#95a5a6',
              font: { size: 10 },
              stepSize: 20,
              callback: function(value) { return value + '명'; }
            },
            grid: { color: 'rgba(149, 165, 166, 0.1)' }
          }
        }
      }
    });

    // 2. 출석 그룹 도넛차트 (범례: 프로그램별 출석 그룹 막대 그래프와 동일 스타일)
    const groupPieCtx = document.getElementById('groupPieChart').getContext('2d');
    const groupPieChart = new Chart(groupPieCtx, {
      type: 'doughnut',
      data: {
        labels: ['저조 (0-30%)', '일상 (30-70%)', '루틴화 (70-100%)'],
        datasets: [{
          data: [180, 261, 124],
          backgroundColor: ['#e74c3c', '#d4af37', '#27ae60'],
          borderWidth: 3,
          borderColor: '#fff'
        }]
      },
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: '#95a5a6',
              font: { size: 9 },
              padding: 6,
              generateLabels: function(chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  return data.labels.map((label, i) => {
                    const meta = chart.getDatasetMeta(0);
                    const style = meta.controller.getStyle(i);
                    return {
                      text: label,
                      fillStyle: style.backgroundColor,
                      strokeStyle: 'transparent',
                      lineWidth: 0,
                      hidden: meta.data[i].hidden,
                      index: i
                    };
                  });
                }
                return [];
              }
            },
            onClick: function(e, legendItem, legend) {
              const index = legendItem.index;
              const chart = legend.chart;
              const meta = chart.getDatasetMeta(0);

              meta.data[index].hidden = !meta.data[index].hidden;

              let visibleSum = 0;
              meta.data.forEach((segment, i) => {
                if (!segment.hidden) visibleSum += chart.data.datasets[0].data[i];
              });

              chart.config.options.plugins.centerText.text = visibleSum + '명';
              chart.update();
            }
          },
          centerText: { text: '565명' },
          datalabels: {
            color: '#fff',
            font: { size: 12, weight: 'bold' },
            formatter: (value, ctx) => {
              const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return percentage + '%';
            },
            anchor: 'center',
            align: 'center'
          }
        }
      }
    });

    // 3. 프로그램별 그룹 차트
    const programGroupCtx = document.getElementById('programGroupChart').getContext('2d');
    new Chart(programGroupCtx, {
      type: 'bar',
      data: {
        labels: ['월수금', '화목토', '매일반'],
        datasets: [
          { label: '저조 (0-30%)', data: [69, 76, 35], backgroundColor: '#e74c3c' },
          { label: '일상 (30-70%)', data: [75, 92, 94], backgroundColor: '#d4af37' },
          { label: '루틴화 (70-100%)', data: [48, 23, 53], backgroundColor: '#27ae60' }
        ]
      },
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: '#95a5a6',
              font: { size: 9 },
              padding: 6
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: { color: '#95a5a6', font: { size: 10 } },
            grid: { color: 'rgba(149, 165, 166, 0.1)' }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              color: '#95a5a6',
              font: { size: 10 },
              callback: function(value) { return value + '명'; }
            },
            grid: { color: 'rgba(149, 165, 166, 0.1)' }
          }
        }
      }
    });

    // 4. 수업 vs 자유수영
    const lessonVsFreeswimCtx = document.getElementById('lessonVsFreeswimChart').getContext('2d');
    new Chart(lessonVsFreeswimCtx, {
      type: 'bar',
      data: {
        labels: ['월수금', '화목토', '매일반', '전체 평균'],
        datasets: [
          { label: '수업 출석률', data: [62.2, 56.6, 61.4, 60.1], backgroundColor: '#3498db' },
          { label: '자유수영 출석률', data: [41.5, 24.8, 38.1, 34.9], backgroundColor: '#9b59b6' }
        ]
      },
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: '#95a5a6',
              font: { size: 10 },
              padding: 8
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#95a5a6', font: { size: 11 } },
            grid: { color: 'rgba(149, 165, 166, 0.1)' }
          },
          y: {
            beginAtZero: true,
            max: 80,
            ticks: {
              color: '#95a5a6',
              font: { size: 10 },
              stepSize: 10,
              callback: function(value) { return value + '%'; }
            },
            grid: { color: 'rgba(149, 165, 166, 0.1)' }
          }
        }
      }
    });
  </script>
</body>
</html>
