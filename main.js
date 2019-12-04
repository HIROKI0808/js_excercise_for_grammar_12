/**
 * 課題1: Twitterのタイムラインのような配列を作る
 *   - 変数名はtweetsで配列とする
 *   - tweetsの中には複数のオブジェクトがある
 *     - 1個1個のオブジェクトはツイートを表す
 *     - 全部で2個のツイートオブジェクトを作る
 *   - ツイートオブジェクトは以下の情報を持つ
 *     - username : ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い。)
 *     - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 *     - replies : ツイートに対する返信が格納された(配列)
 *       - repliesに格納されている1個1個のデータもツイートオブジェクト
 *       - 2個のツイートはそれぞれ2個の返信ツイートを持つ
 *       - 返信ツイートは以下の情報を持つ
 *         - username : 返信ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い)
 *         - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 */
const tweets = [
	{
		username: 'ひろき',
		text: 'HTMLの学習コンテンツに取り組みました！',
		replies: [
			{
				username: 'つよp',
				text: 'OKです^^ マージして構いません^^'
			},
			{
				username: '友達1＆友達2',
				text: 'やったね！！'
			}
		]
	},
	{
		username: 'まこT',
		text: '昨日も1日ずっとJSの勉強していた。という夢を見たんだ。',
		replies: [
			{
				username: 'ひろき',
				text: 'それはそれで気になる！'
			},
			{
				username: 'みゆｋ',
				text: '今度おしえ！、私も見たわ！^^'
			}
		]
	}
];

/**
 * 課題2: 課題1で作ったtweetsの内容を全て表示する
 *   - forEachを使ってtweetsの以下の内容を1つずつconsole.logで出力する
 *     - username
 *     - text
 *     - replies
 *       - repliesの内容もforEachを使って全て表示する
 */
tweets.forEach((person, index) => {
	console.log('--------ツイート' + index + '------------');
	console.log('ユーザー名 : ', person.username);
	console.log('ツイート : ', person.text);
	person.replies.forEach((reTweet, index) => {
		console.log('--------返信' + index + '------------');
		console.log('ユーザー名 : ', reTweet.username);
		console.log('ツイート : ', reTweet.text);
	})
});