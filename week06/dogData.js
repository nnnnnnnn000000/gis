        const dogData = {
      japan: {
        country: '日本',
        dogs: [
          { breed: '秋田犬', size: '大型犬', group: '原始の犬/スピッツ', description: '忠誠心が強く落ち着いた性格。', image: 'akita.jpg' },
          { breed: '柴犬', size: '中型犬', group: '原始の犬/スピッツ', description: '独立心があり活発で忠実。', image: 'shiba.jpg' },
          { breed: '紀州犬', size: '中型犬', group: '原始の犬/スピッツ', description: '猟犬として優れ、静かで我慢強い。', image: 'kishu.jpg' }
        ]
      },
      germany: {
        country: 'ドイツ',
        dogs: [
          { breed: 'ジャーマン・シェパード', size: '大型犬', group: '使役犬', description: '知能が高く警察犬としても活躍。', image: 'gsd.jpg' },
          { breed: 'ダックスフント', size: '小型犬', group: 'テリア/ダックス', description: '短足で胴長、活発で好奇心旺盛。', image: 'dachshund.jpg' },
          { breed: 'ロットワイラー', size: '大型犬', group: '使役犬', description: '力強く勇敢で警備向き。', image: 'rottweiler.jpg' }
        ]
      },
      uk: {
        country: 'イギリス',
        dogs: [
          { breed: 'ラブラドール・レトリーバー', size: '大型犬', group: '鳥猟犬', description: '家庭犬や盲導犬として人気。', image: 'labrador.jpg' },
          { breed: 'ジャック・ラッセル・テリア', size: '小型犬', group: 'テリア/ダックス', description: '小さいがエネルギッシュ。', image: 'jackrussell.jpg' },
          { breed: 'ボーダーコリー', size: '中型犬', group: '牧羊犬', description: '頭がよく活発で人懐っこい。とてもかわいい。', image: 'bordecoll.jpg' }
        ]
      },
      usa: {
        country: 'アメリカ',
        dogs: [
          { breed: 'アメリカン・ピット・ブル・テリア', size: '中型犬', group: 'その他', description: '筋肉質で勇敢。正しい訓練が重要。', image: 'pitbull.jpg' },
          { breed: 'アラスカン・マラミュート', size: '大型犬', group: '原始の犬/スピッツ', description: 'そり引き犬として活躍。友好的で力強い。', image: 'malamute.jpg' }
        ]
      },
      china: {
        country: '中国',
        dogs: [
          { breed: 'チャウチャウ', size: '中型犬', group: '原始の犬/スピッツ', description: 'ライオンのような外見で無口。', image: 'chowchow.jpg' },
          { breed: 'ペキニーズ', size: '小型犬', group: '愛玩犬', description: 'ふわふわで愛らしく、落ち着きがある。', image: 'pekingese.jpg' }
        ]
      },
      russia: {
      country: 'ロシア',
      dogs: [
        { breed: 'サモエド', size: '大型犬', group: '原始の犬/スピッツ', description: '笑っているような表情が特徴的。', image: 'samoyed.jpg' },
        { breed: 'シベリアンハスキー', size: '大型犬', group: '原始の犬/スピッツ', description: '青い目と狼のような外見。', image: 'husky.jpg' }
      ]
    },
    switzerland: {
      country: 'スイス',
      dogs: [
        { breed: 'バーニーズマウンテンドッグ', size: '大型犬', group: '使役犬', description: '落ち着いた性格で優しい。', image: 'bernese.jpg' },
        { breed: 'セントバーナード', size: '大型犬', group: '使役犬', description: '雪山救助で有名な犬。', image: 'saintbernard.jpg' }
      ]
    },
    mexico: {
      country: 'メキシコ',
      dogs: [
        { breed: 'チワワ', size: '小型犬', group: '愛玩犬', description: '世界最小の犬種。', image: 'chihuahua.jpg' }
      ]
    },
    scotland: {
      country: 'スコットランド',
      dogs: [
        { breed: 'シェットランドシープドッグ', size: '中型犬', group: '牧羊犬', description: '賢くて訓練しやすい。', image: 'shetland.jpg' },
        { breed: 'スコティッシュテリア', size: '小型犬', group: 'テリア/ダックス', description: '頑固だけど忠実。', image: 'scottishterrier.jpg' },
         { breed: 'ラフコリー', size: '大型犬', group: '牧羊犬', description: '優雅な毛並みと穏やかな性格。', image: 'roughcollie.jpg' }
      ]
    },
    australia: {
      country: 'オーストラリア',
      dogs: [
        { breed: 'ケルピー', size: '中型犬', group: '牧羊犬', description: '働き者でとても活発。', image: 'kelpie.jpg' }
      ]
    },
    canada: {
      country: 'カナダ',
      dogs: [
        { breed: 'ラブラドールレトリバー', size: '大型犬', group: '鳥猟犬', description: '家庭犬に最適。', image: 'labrador.jpg' },
        { breed: 'ニューファンドランド', size: '大型犬', group: '使役犬', description: '泳ぎが得意で力強い。', image: 'newfoundland.jpg' }
      ]
    },
    france: {
      country: 'フランス',
      dogs: [
        { breed: 'プードル', size: '中型犬', group: '愛玩犬', description: '非常に知的でおしゃれ。', image: 'poodle.jpg' },
        { breed: 'ビションフリーゼ', size: '小型犬', group: '愛玩犬', description: 'ふわふわで人懐っこい。', image: 'bichon.jpg' },
        { breed: 'フレンチブルドッグ', size: '小型犬', group: '愛玩犬', description: '短い鼻と愛らしい性格。', image: 'frenchbulldog.jpg' }
      ]
    },
    croatia: {
      country: 'クロアチア',
      dogs: [
        { breed: 'ダルメシアン', size: '中型犬', group: '鳥猟犬', description: '白黒のブチ模様で有名。', image: 'dalmatian.jpg' }
      ]
    },
    tibet: {
      country: 'チベット',
      dogs: [
        { breed: 'チベタンマスティフ', size: '大型犬', group: '原始の犬/スピッツ', description: '巨大でとても守護的。', image: 'tibetanmastiff.jpg' }
      ]
    },
    hungary: {
      country: 'ハンガリー',
      dogs: [
        { breed: 'ビズラ', size: '中型犬', group: '鳥猟犬', description: 'エレガントで忠実な猟犬。', image: 'vizsla.jpg' }
      ]
    },
    ireland: {
      country: 'アイルランド',
      dogs: [
        { breed: 'アイリッシュセッター', size: '大型犬', group: '鳥猟犬', description: '美しい赤毛と陽気な性格。', image: 'irishsetter.jpg' }
      ]
    },
    netherlands: {
      country: 'オランダ',
      dogs: [
        { breed: 'キースホンド', size: '中型犬', group: '原始の犬/スピッツ', description: 'ふわふわの毛と笑顔。', image: 'keeshond.jpg' }
      ]
    }
  };


  const originData = {
  japan: { lng: 139.6917, lat: 35.6895 },
  germany: { lng: 10.4515, lat: 51.1657 },
  uk: { lng: -3.435973, lat: 55.3781 },
  usa: { lng: -95.7129, lat: 37.0902 },
  china: { lng: 104.1954, lat: 35.8617 },
  russia: { lng: 105.3188, lat: 61.5240 },
  switzerland: { lng: 8.2275, lat: 46.8182 },
  mexico: { lng: -102.5528, lat: 23.6345 },
  scotland: { lng: -4.2026, lat: 56.4907 },
  australia: { lng: 133.7751, lat: -25.2744 },
  canada: { lng: -106.3468, lat: 56.1304 },
  france: { lng: 2.2137, lat: 46.6034 },
  croatia: { lng: 15.2, lat: 45.1 },
  tibet: { lng: 87.0, lat: 31.0 },
  hungary: { lng: 19.5033, lat: 47.1625 },
  ireland: { lng: -8.2439, lat: 53.4129 },
  netherlands: { lng: 5.2913, lat: 52.1326 }
};

