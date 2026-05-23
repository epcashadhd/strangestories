const STORAGE_KEY = "strangeStoriesRecord.v2";

const STORIES = [
  {
    id: "q1",
    title: "Q1. Dentist",
    displayTitle: "Q1. 小明的故事",
    ability: "Lie",
    image: "assets/q1-dentist-story.png",
    alt: "小明因牙痛而擔心，媽媽在家中關心地問他。",
    story:
      "小明不喜歡去牙醫那裡，因為他每次去牙醫補牙，都會覺得好痛。但是他知道，如果他有牙痛，媽媽一定會帶他見牙醫。現在小明發現自己有牙痛，媽媽也察覺了。媽媽問小明：「你是不是有牙痛呀？」小明說：「媽媽，我沒有牙痛！」",
    questions: [
      { id: "truth", label: "問題 1", text: "小明是否講緊真話？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼小明會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nHe didn’t have toothache\nPsychological\nHe’s just saying it for a joke\n\nPhysical state (2P)\nIt hurts when he gets a filling\nIt’s sore when he goes to the dentist\nHe’s got toothache/He had toothache\nHe needs to go to the dentist\nIt hurts when he gets the toothache\nBecause they hurt\nBecause when you get a filling it’s sore\nSo that he doesn’t have to go to the dentist",
      score1:
        "Partial psychological state (2M)\nHe thinks it’s really sore and he’s ill\nHe doesn’t like going to the dentist\nHe doesn’t like the dentist\nHe hates going to the dentist",
      score2:
        "Psychological state full and accurate answer (2M)\nHe doesn’t want to go to the dentist\nHe doesn’t want a filling\nHe doesn’t want to get a filling because it hurts\nHe doesn’t want to get hurt\nHe knows that it’ll hurt a lot",
    },
  },
  {
    id: "q2",
    title: "Q2. Hat",
    displayTitle: "Q2. 彼得的故事",
    ability: "White lie",
    image: "assets/q2-hat-story.png",
    alt: "彼得看見姑媽的新帽子，想禮貌地回應。",
    story:
      "有一天，姑媽探望彼得。彼得很愛這個姑媽，不過姑媽今天戴了一頂新帽子。彼得認為這帽子很醜陋。他認為姑媽戴上這帽子後變得很古怪，他認為她的舊帽子比較好看。當他的姑媽問他：「我的帽子好看嗎？」彼得回答說：「很好看！」",
    questions: [
      { id: "truth", label: "問題 1", text: "彼得是否講緊真話？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼彼得會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nIt’s got a(u)nts on it\nIt looked nice\nPsychological\nHe liked the hat\nHe wanted one\nHe liked the old hat\n\nPhysical state (2P)\nThe lady asked him\nIt looked horrible",
      score1:
        "Partial psychological state (2M)\nHe didn’t want to get a row\nHe didn’t want to get into trouble\nHe didn’t like the hat\nHe loved his aunt",
      score2:
        "Psychological state full and accurate answer (2M)\nTo make his auntie feel that he likes it\nHe didn’t want his auntie to think that he didn’t like it\nHe didn’t want her to get sad/to make his auntie sad\nHe didn’t want to hurt her feelings\nHe didn’t want to upset his auntie\nSo his auntie wouldn’t be offended\nHe didn’t want to tell her he hated it\nHe didn’t want to be rude\nHe didn’t want to be nasty to her\nHe wanted to make his auntie feel good\nHe wanted to make his auntie happy",
    },
  },
  {
    id: "q3",
    title: "Q3. Glove",
    displayTitle: "Q3. 小偷的故事",
    ability: "Misunderstanding",
    image: "assets/q3-glove-story.png",
    alt: "小偷掉下手套，警察想叫停他歸還手套。",
    story:
      "一個小偷在商店偷東西之後離開。在他逃跑返家的時候，碰上一個警察。警察不知道那人是小偷，但警察發現那人在奔跑時跌下了一對手套，於是警察向他大叫：「喂，你停下來！」小偷轉身，看見了警察，於是雙手高舉，並向警察承認他剛剛在商店偷東西。",
    questions: [
      { id: "truth", label: "問題 1", text: "警察有沒有奇怪小偷的行為？／警察會否對佢小偷的反應感到驚訝？", type: "choice", options: ["Yes", "No"] },
      { id: "explanation", label: "問題 2", text: "警察只是想將手套還給小偷，為什麼小偷會這樣做？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nThe policeman was going to arrest him\nThe burglar is nice\nThe burglar had been bad\nSo that he could get the glove\nThe policeman noticed that he was a burglar\nPsychological\nHe wanted to put on his glove\nThe burglar didn’t want to keep running\nHe was feeling guilty so he gave himself up\nHe didn’t want to get caught out/get into trouble\nHe knew he’d get caught anyway/was going to jail anyway\nHe didn’t want the policeman to know he was stealing\nBecause the policeman saw the glove and thought it may be him\n\nPhysical state (2P)\nHe’d broken into/robbed the shop\nThe burglar had dropped his glove\nIf he said he had burgled the shop he might not go to jail\nIt was better for him to own up now rather than later",
      score1:
        "Partial psychological state (2M)\nHe was frightened he was going to take him away",
      score2:
        "Psychological state full and accurate answer (2M)\nHe thought the policeman knew/thought he was the burglar/had burgled the shop\nHe thought the policeman was going to arrest him/had caught him\nHe thought the policeman was going to stop him for doing it\nHe thought the policeman was running after him\nHe thought he’d get put in/was going to jail",
    },
  },
  {
    id: "q4",
    title: "Q4. Picnic",
    displayTitle: "Q4. 野餐的故事",
    ability: "Sarcasm",
    image: "assets/q4-picnic-story.png",
    alt: "兩個孩子野餐時遇上下雨。",
    story:
      "小明與小英一起到郊外野餐，因為小明認為今天的天氣會好好，很適合郊外野餐。當他們去到目的地時，突然下起大雨，把他們的衣服和食物都弄濕了。小英很憤怒，並說：「今天真的適合郊外野餐了！」",
    questions: [
      { id: "truth", label: "問題 1", text: "小英是否講緊真話？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼小英會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nBecause she says it’s a lovely day but it’s not\nIf they’re eating sandwiches they might get wet\nSo that she could have a picnic\nPsychological\nShe was exaggerating\nShe likes rain\nShe thinks it’s a sunny day\nShe wanted it to be sunny\nShe really wanted to go on a picnic\nShe wanted Tom to get wet\nShe was pretending\nShe didn’t want to hurt Tom’s feelings/make him sad\nBecause Tom thought she’d give him a row\n\nPhysical state (2P)\nIt was sunny and it started raining\nIt’s raining\nBecause Tom said it was going to be sunny but it wasn’t\nThe boy thought it was going to be a lovely day but it wasn’t",
      score1:
        "Partial psychological state (2M)\nShe was cross\nShe was trying to be funny\nPeople say stuff like that when they’re angry\nShe was annoyed with Tom\nShe’s angry\nShe’s copying what Tom says but it isn’t really\nShe’s joking",
      score2: "Psychological state full and accurate answer (2M)\nShe’s being sarcastic",
    },
  },
  {
    id: "q5",
    title: "Q5. Kitten",
    displayTitle: "Q5. 小貓的故事",
    ability: "Persuasion",
    image: "assets/q5-kitten-story.png",
    alt: "亞珍看著陳太太家中的小貓。",
    story:
      "亞珍很想買一隻小貓，當她知道陳太太有很多小貓，而有些小貓她不想要，亞珍便去找陳太太。陳太太很愛貓，雖然她有很多貓而不能把牠們完全照顧，但是她也不會傷害她的小貓。亞珍看過陳太太的貓後，她不肯定她是否收養陳太太的貓，因為亞珍想要一隻貓女，而陳太太有的全是貓仔。陳太太對亞珍說：「如果沒有人要牠們，我會把牠們殺死。」",
    questions: [
      { id: "truth", label: "問題 1", text: "陳太太是否講緊真話？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼陳太太會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nShe didn’t have a kitten\nIt’s not very nice because they are male/because they were all males\nShe’d have to drown them\nJill already has a cat\nPsychological\nBecause Jill wants to buy one/Jill wanted to buy a kitten\nMrs. S doesn’t want her to take them/to give her one\nMrs. S wants to keep them/loved the kittens\nMrs. S doesn’t like the kittens\nJill wanted to drown them\nNobody wanted one\nShe didn’t want Jill to have a male cat\nMrs. S didn’t know if Jill’s mum wanted the cat\nSo that it would make Jill happier and so that Mrs. S would get more money for the kitten\nAs a joke to hurt Jill’s feelings\n\nPhysical state (2P)\nShe had too many cats\nThere was no one buying the kittens\nShe couldn’t keep them all",
      score1:
        "Partial psychological state (2M)\nShe wanted to give them away\nShe knew Jill didn’t want one\nShe doesn’t like having a lot of kittens\nShe wanted to get rid of them",
      score2:
        "Psychological state full and accurate answer (2M)\nShe wanted someone/Jill to buy a kitten\nSo that Jill would buy one/take one\nShe wanted Jill to have one\nShe wanted the kittens to be sold\nShe wanted Jill to feel bad about wanting a male so that she’d buy one\nTo tempt her to buy one",
    },
  },
  {
    id: "q6",
    title: "Q6. Swings",
    displayTitle: "Q6. 鞦韆的故事",
    ability: "Contrary Emotions",
    image: "assets/q6-swings-story.png",
    alt: "小燕想去公園但害怕路上的狗。",
    story:
      "今天小燕想到公園盪鞦韆。小燕知道，如果她要走到公園，必先要經過李伯伯的家。李伯伯有一隻很兇惡的狗。每次小燕經過他的家，那隻狗必定會跳上大閘狂吠。小燕十分害怕這隻狗，亦十分討厭行經這間屋。今天她很想到公園盪鞦韆，媽媽問她想不想到公園時，小燕回答媽媽說：「我不想。」",
    questions: [
      { id: "truth", label: "問題 1", text: "小燕是否講緊真話？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "既然小燕很想到公園盪鞦韆，為什麼小燕會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nShe’s waiting for her mum\nPsychological\nShe wants another person to come with her\n\nPhysical state (2P)\nBecause there’s a nasty dog\nBecause of the barking dog/scary dog\nBecause the dog is nasty\nBecause the dog jumps up and barks\nShe’ll have to go past the fierce dog\nSo she doesn’t have to go past the house",
      score1:
        "Partial psychological state (2M)\nBecause of the dog that frightens her\nBecause the dog scares her/she was scared of the dog\nShe didn’t like walking past the house\nShe doesn’t like the fierce/nasty dog",
      score2:
        "Psychological state full and accurate answer (2M)\nShe didn’t want to see the dog\nShe doesn’t want to get frightened\nShe doesn’t want the dog to jump up and bark\nShe doesn’t want to pass the dog",
    },
  },
  {
    id: "q7",
    title: "Q7. Banana",
    displayTitle: "Q7. 香蕉的故事",
    ability: "Pretend",
    image: "assets/q7-banana-story.png",
    alt: "小麗用香蕉假裝打電話。",
    story:
      "小美與小麗在家中玩耍，小麗從水果盤拿起了香蕉，放在耳旁，然後對小美說：「看！這隻香蕉是電話！」",
    questions: [
      { id: "truth", label: "問題 1", text: "小麗是否講緊真話？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼小麗會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nPsychological\nShe doesn’t want to pick up the phone\nShe thought it was a real phone\nShe thinks it’s a telephone\nWants to have a phone\nShe’s trying to make her feel left out because she hasn’t got one\n\nPhysical state (2P)\nIt’s shaped as/looks like a telephone",
      score1: "Partial psychological state (2M)\nShe thinks it looks like one",
      score2:
        "Psychological state full and accurate answer (2M)\nShe’s pretending/kidding on\nShe’s making a joke/trying to be funny\nShe wants to make Katie happy/laugh\nShe is acting smart/being silly\nFor a laugh\nShe thinks it’s funny\nShe is trying a trick on Katie\nShe wants to play/they’re playing a game",
    },
  },
  {
    id: "q8",
    title: "Q8. Haircut",
    displayTitle: "Q8. 剪頭髮的故事",
    ability: "Joke",
    image: "assets/q8-haircut-story.png",
    alt: "兩個男孩在髮型屋外看見剛剪短頭髮的女士。",
    story:
      "亞明和亞強看見李太太從理髮店內走出來。他們看到李太太的樣子很古怪，因為理髮師幫了她剪了一個很短的髮型，亞明對亞強說：「李太太一定剛與剪草機搏鬥！」",
    questions: [
      { id: "truth", label: "問題 1", text: "亞明講的是否事實？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼亞明會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nBecause her hair is cut like the grass\nShe doesn’t wear nice clothes\nShe went to the hairdresser and got her hair cut\nPsychological\nHe doesn’t want to upset her\nHe thinks that’s what it looks like\nHe doesn’t like it, he’s just pretending\nHe thought it looked like she’d got it cut by a lawn mower/had a fight with a lawnmower\nHe’s lying\nHe was being sarcastic\n\nPhysical state (2P)\nBecause her hair is funny\nBecause her hair looks quite short/hair is too short\nBecause her hair is too short for a woman, she’s in the army!\nBecause her hair got cut too short\nBecause she doesn’t look nice\nBecause it looks like a lawn mower has cut her hair\nBecause Mrs. T looks like a boy",
      score1: "Partial psychological state (2M)\nHe didn’t like her hair",
      score2:
        "Psychological state full and accurate answer (2M)\nHe wants to make his friend laugh/impress his friend\nHe wants to make fun of her\nTo have a laugh/to have a joke/be funny\nTo slag off Mrs. T\nIt’s a/for a joke\nTo act smart\nHe’s being silly in front of his friend",
    },
  },
  {
    id: "q9",
    title: "Q9. Cough",
    displayTitle: "Q9. 咳嗽的故事",
    ability: "Figure of Speech",
    image: "assets/q9-cough-story.png",
    alt: "小美在飯桌上咳嗽，爸爸關心她。",
    story:
      "小美生病了，她整天都在咳嗽。爸爸看見她不停地咳嗽，對她說：「可憐的小美，你就快咳到肺都甩啦！」",
    questions: [
      { id: "truth", label: "問題 1", text: "爸爸講的是否事實？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼爸爸會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nIt looks like she’s got a frog\nShe needs to go to the Dr’s to get it out\nPsychological\nTo frighten her\nHe’s being sarcastic\nHe thinks that it’s true\nHe thinks she’s got something in her throat because she keeps coughing\n\nPhysical state (2P)\nShe’s got a cough\nIt’s tickly, she keeps coughing\nShe’s coughing too much\nHe’s probably said it before\nIt sounds like a frog is in her throat\nFrogs make the noise like when you cough",
      score1:
        "Partial psychological state (2M)\nHe was just teasing her\nAs a joke\nTo pretend\nTo make her feel better/cheer her up\nHe’s trying to make her laugh\nTo be funny\nHe thinks it’s a kind of joke, like the banana one",
      score2:
        "Psychological state full and accurate answer (2M)\nIt’s a way to say she’s got a cough\nIt’s a saying\nIt’s a figure of speech\nIt’s one of the jokes to say you’ve got a bad cough\nIt’s an expression\nWhen you cough, some people say this\nIt’s a comment, its another way to say you’re coughing terribly",
    },
  },
  {
    id: "q10",
    title: "Q10. Ping-Pong",
    displayTitle: "Q10. 球拍的故事",
    ability: "Double Bluff",
    image: "assets/q10-pingpong-story.png",
    alt: "阿文在房間尋找被小新藏起來的球拍。",
    story:
      "小新經常講大話，他的哥哥阿文也知道他從不講真說話。昨天小新偷去了阿文的球拍，而阿文知道小新把球拍藏在家中一個角落。阿文怎麼也找不著，他很憤怒，並對小新說：「我的球拍在哪裡？你一定是把它藏在你的衣櫃內或是你的床下，因為我在家每個角落也找不著。在哪裡？在衣櫃還是在你的床下？」小新告訴他是在床下。",
    questions: [
      { id: "truth", label: "問題 1", text: "小新講的是否事實？", type: "choice", options: ["T", "F"] },
      { id: "where", label: "問題 2", text: "阿文會在哪裡找他的球拍？", type: "choice", options: ["in the cupboard", "under the bed"] },
      { id: "explanation", label: "問題 3", text: "為什麼阿文會在這個地方找球拍呢？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nHe said it was under the bed or in the cupboard\nBecause it’s a good hiding place\nHe would look under the bed because he would see the lumps on it\nI’d look everywhere just in case, may be in the shed\nPsychological\nHe can’t remember\nHe thinks in there or in the cupboard\nI think it’s broken and in the bin\nI think it’s in the cupboard because he wouldn’t have hid it under his bed in case his mum found it\nHe wants to play ping-pong/find it\nHe doesn’t know Simon never tells the truth\nHe doesn’t know where it is\n\nPhysical state (2P)\nBecause Simon said so/told him",
      score1:
        "Partial psychological state (2M)\nIt wont be there because Simon lied\nSimon never tells the truth\nBecause it’s the opposite from what Simon says\nBecause Simon is a liar/always lies\nSimon never tells the truth",
      score2:
        "Psychological state full and accurate answer (2M)\nBecause he doesn’t believe Simon\nJim knows Simon is a liar/always lies",
    },
  },
  {
    id: "q11",
    title: "Q11. Santa Claus",
    displayTitle: "Q11. 聖誕老人的故事",
    ability: "Appearance/Reality",
    image: "assets/q11-santa-story.png",
    alt: "陳先生在百貨公司扮聖誕老人派糖。",
    story:
      "平安夜，美美的媽媽帶美美到百貨公司買玩具。在玩具部，美美的鄰居陳先生打扮成聖誕老人，向小朋友派糖果。美美認出陳先生，走上前問他說：「你是誰？」陳先生回答說：「我是聖誕老人！」",
    questions: [
      { id: "truth", label: "問題 1", text: "陳先生講的是否事實？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼陳先生會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "physical\nHe’s really Mr. Brown\nHe is Santa Claus\nPsychological\nHe’s being funny\nFor a joke\nHe thinks that he is Santa\nHe wanted to get dressed up as Santa\n\nPhysical state (2P)\nHe’s dressed up as Santa\nIt’s a tradition, but he doesn’t really exist\nIt’s his job",
      score1:
        "Partial psychological state (2M)\nHe wants to be nice/to give out sweets\nHe’s doing it for fun\nHe wanted to make people laugh\nTo make her surprised\nHe wants the children to be happy/to cheer the children up\nHe doesn’t want her to know in case she makes fun of him\nTo make her excited",
      score2:
        "Psychological state full and accurate answer (2M)\nHe wants the children/people/Alice to think he is Santa\nHe wants to pretend/pretending/kidding on/acting\nHe doesn’t want her to find out\nHe wants all the children to believe in him/Santa\nHe doesn’t want her to know Santa isn’t real\nHe doesn’t want Alice to tell anybody he is not real\nHe doesn’t want to spoil it, he wants everybody to believe",
    },
  },
  {
    id: "q12",
    title: "Q12. Doll",
    displayTitle: "Q12. 洋娃娃的故事",
    ability: "Forgot",
    image: "assets/q12-doll-story.png",
    alt: "小怡吃午飯時，花園外下雨，洋娃娃留在外面。",
    story:
      "小怡在花園玩洋娃娃。當媽媽叫她吃午飯時，小怡把洋娃娃遺留在花園裡。正當他們午飯時，突然下起大雨來。媽媽問小怡：「洋娃娃是否留在花園裡？」小怡說：「不是呀，她在我身邊。」",
    questions: [
      { id: "truth", label: "問題 1", text: "小怡講的是否事實？", type: "choice", options: ["T", "F"] },
      { id: "explanation", label: "問題 2", text: "為什麼小怡會這樣講？", type: "verbatim" },
    ],
    reference: {
      score0:
        "Physical\nShe really did leave her doll out\nShe didn’t bring it in\nThe dolly is wet\nShe was too hungry\nShe did leave it there\nThe doll will be dirty and they’ll have to clean it\nPsychological\nShe didn’t like it\nShe wants it nice and clean, not wrecked\nShe wants to leave it out in the rain\n\nPhysical state (2P)\nSo her mum doesn’t have to go out in the rain and try the doll",
      score1:
        "Partial psychological state (2M)\nShe lied/didn’t tell the truth\nShe might get a row if it’s new\nSo her mum wouldn’t give her a row\nShe didn’t want her mum to get soaked\nShe doesn’t want her mum to get angry/annoyed\nShe doesn’t want to tell her mum because it might be expensive\nSo she wouldn’t/won’t get in trouble/get a row\nTo make her mummy pleased in case it had batteries\nShe doesn’t want/so her mum won’t get upset",
      score2:
        "Psychological state full and accurate answer (2M)\nShe thought she’d brought it inside/forgot/she might think her doll is outside\nShe made a mistake\nShe doesn’t want to go back out in the rain/have to go back out in the rain/go into the garden\nShe can’t be bothered getting the doll\nShe thought she’d get in trouble",
    },
  },
];

const emptyState = () => ({
  mode: "",
  client: {
    englishName: "",
    chineseName: "",
    school: "",
    className: "",
    assessmentDate: "",
    dateOfBirth: "",
    age: "",
  },
  answers: {},
  scores: {},
});

let state = loadState();
let currentStoryIndex = 0;
let currentQuestionIndex = -1;
let scoringIndex = 0;
let activeCanvases = [];
let saveTimer = null;
const scoreSkipWarnings = {};

const NORM_AGE_BANDS = ["5;0-5;11", "6;0-6;11", "7;0-7;11", "8;0-8;11", "9;0-9;11", "10;0-10;11", "11;0-11;11", "12;0-12;11"];
const NORM_TOTALS = [4.67, 6.35, 10.88, 11.65, 15.06, 15.57, 14.68, 19.0];
const NORM_P_VALUES = {
  q1: "0.004",
  q2: "<0.001",
  q3: "<0.001",
  q4: "<0.001",
  q5: "<0.001",
  q6: "0.002",
  q7: "<0.001",
  q8: "0.006",
  q9: "<0.001",
  q10: "0.001",
  q11: "<0.001",
  q12: "0.001",
  total: "<0.001",
};
const NORM_MEANS = {
  q1: [0.75, 0.83, 1.44, 1.43, 1.33, 1.57, 1.45, 1.29],
  q2: [0.0, 0.09, 0.62, 0.62, 0.78, 0.9, 1.14, 1.71],
  q3: [0.5, 1.0, 1.31, 1.4, 1.83, 1.71, 1.73, 1.86],
  q4: [0.0, 0.3, 0.44, 0.67, 1.39, 1.43, 1.36, 1.71],
  q5: [0.0, 0.43, 0.69, 1.0, 1.17, 1.57, 1.23, 1.43],
  q6: [0.67, 0.48, 0.75, 0.52, 1.56, 1.19, 0.95, 1.43],
  q7: [1.0, 0.61, 1.5, 1.05, 1.56, 1.52, 1.59, 1.86],
  q8: [0.0, 0.48, 0.56, 0.62, 0.67, 1.14, 0.55, 0.86],
  q9: [0.25, 0.17, 0.69, 0.95, 1.06, 0.67, 1.05, 1.71],
  q10: [1.0, 1.0, 1.19, 1.24, 1.39, 1.48, 1.5, 1.57],
  q11: [0.0, 0.13, 0.31, 0.62, 1.17, 0.81, 1.05, 1.57],
  q12: [0.5, 0.83, 1.38, 1.24, 1.17, 1.57, 1.09, 2.0],
};

const screens = {
  home: document.querySelector("#homeScreen"),
  client: document.querySelector("#clientScreen"),
  test: document.querySelector("#testScreen"),
  generate: document.querySelector("#generateScreen"),
  thank: document.querySelector("#thankScreen"),
  scoring: document.querySelector("#scoringScreen"),
  norms: document.querySelector("#normsScreen"),
};

const elements = {
  studentModeButton: document.querySelector("#studentModeButton"),
  professionalModeButton: document.querySelector("#professionalModeButton"),
  clientInfoButton: document.querySelector("#clientInfoButton"),
  homeScoringButton: document.querySelector("#homeScoringButton"),
  normsButton: document.querySelector("#normsButton"),
  clearRecordButton: document.querySelector("#clearRecordButton"),
  clearDialog: document.querySelector("#clearDialog"),
  cancelClearButton: document.querySelector("#cancelClearButton"),
  confirmClearButton: document.querySelector("#confirmClearButton"),
  clientForm: document.querySelector("#clientForm"),
  confirmClientButton: document.querySelector("#confirmClientButton"),
  clientSaveMessage: document.querySelector("#clientSaveMessage"),
  assessmentDate: document.querySelector("#assessmentDate"),
  dateOfBirth: document.querySelector("#dateOfBirth"),
  age: document.querySelector("#age"),
  modeLabel: document.querySelector("#modeLabel"),
  storyTitle: document.querySelector("#storyTitle"),
  storyImage: document.querySelector("#storyImage"),
  storyText: document.querySelector("#storyText"),
  questionList: document.querySelector("#questionList"),
  sideQuestionList: document.querySelector("#sideQuestionList"),
  tomBadge: document.querySelector("#tomBadge"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  saveStatus: document.querySelector("#saveStatus"),
  generateBlankPdfButton: document.querySelector("#generateBlankPdfButton"),
  startScoringButton: document.querySelector("#startScoringButton"),
  scoringProgress: document.querySelector("#scoringProgress"),
  scoringTitle: document.querySelector("#scoringTitle"),
  scoringTom: document.querySelector("#scoringTom"),
  scoringResponses: document.querySelector("#scoringResponses"),
  scoringReference: document.querySelector("#scoringReference"),
  prevScoreButton: document.querySelector("#prevScoreButton"),
  nextScoreButton: document.querySelector("#nextScoreButton"),
  scoreReminder: document.querySelector("#scoreReminder"),
  backToQ12Button: document.querySelector("#backToQ12Button"),
  studentBackToQ12Button: document.querySelector("#studentBackToQ12Button"),
  normsTableHead: document.querySelector("#normsTableHead"),
  normsTableBody: document.querySelector("#normsTableBody"),
};

function loadState() {
  try {
    return { ...emptyState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return emptyState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  elements.saveStatus.textContent = "已自動儲存";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    elements.saveStatus.textContent = "自動儲存中";
  }, 1300);
}

function flushActiveCanvases() {
  activeCanvases.forEach((canvasApi) => canvasApi.flush());
}

function todayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeDateInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
}

function storyAnswer(storyId) {
  if (!state.answers[storyId]) state.answers[storyId] = {};
  return state.answers[storyId];
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

function setMode(mode) {
  state.mode = mode;
  saveState();
  currentStoryIndex = 0;
  currentQuestionIndex = -1;
  renderStory();
  showScreen("test");
}

function renderClientForm() {
  if (!state.client.assessmentDate) {
    state.client.assessmentDate = todayString();
    saveState();
  }
  Object.entries(state.client).forEach(([key, value]) => {
    const input = elements.clientForm.elements[key];
    if (input) input.value = value || "";
  });
}

function calculateAge(dateOfBirth, assessmentDate) {
  if (!dateOfBirth || !assessmentDate) return "";
  const birth = new Date(`${dateOfBirth}T00:00:00`);
  const assessment = new Date(`${assessmentDate}T00:00:00`);
  if (Number.isNaN(birth.getTime()) || Number.isNaN(assessment.getTime())) return "";
  let years = assessment.getFullYear() - birth.getFullYear();
  let months = assessment.getMonth() - birth.getMonth();
  if (assessment.getDate() < birth.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return years >= 0 ? `${years}y ${months}m` : "";
}

function renderStory() {
  const story = STORIES[currentStoryIndex];
  if (currentQuestionIndex >= story.questions.length) currentQuestionIndex = -1;
  flushActiveCanvases();
  activeCanvases = [];
  screens.test.classList.toggle("student-mode", state.mode === "student");
  screens.test.classList.toggle("professional-mode", state.mode === "professional");
  elements.saveStatus.classList.toggle("hidden", state.mode === "student");
  elements.modeLabel.textContent = state.mode === "professional" ? "專業人員版本" : "學生版本";
  elements.storyTitle.textContent = "";
  elements.storyImage.src = story.image;
  elements.storyImage.alt = story.alt;
  elements.storyText.textContent = story.story;
  elements.prevButton.disabled = currentStoryIndex === 0;
  const isLastStory = currentStoryIndex === STORIES.length - 1;
  elements.nextButton.textContent = isLastStory ? "完成" : "下一題";
  elements.tomBadge.textContent =
    state.mode === "professional"
      ? `Q${currentStoryIndex + 1}: TOM ability: ${story.ability}`
      : `Q${currentStoryIndex + 1}`;
  elements.tomBadge.classList.remove("hidden");
  elements.questionList.innerHTML = "";
  elements.sideQuestionList.innerHTML = "";

  story.questions.forEach((question, questionIndex) => {
    const card = document.createElement("section");
    card.className = `question-card ${question.type === "choice" ? "choice-card" : "verbatim-card"}`;

    if (state.mode === "student") {
      renderStudentQuestion(card, question, questionIndex);
      elements.questionList.appendChild(card);
      return;
    }

    card.innerHTML = `<h3><span>${questionSymbol(questionIndex)}</span>${escapeHtml(question.text)}</h3>`;
    if (state.mode === "professional") {
      renderProfessionalAnswer(card, story, question);
    }

    elements.questionList.appendChild(card);
  });

  requestAnimationFrame(() => activeCanvases.forEach((canvasApi) => canvasApi.resize()));
}

function renderStudentQuestion(card, question, questionIndex) {
  const isOpen = currentQuestionIndex === questionIndex;
  card.classList.toggle("open", isOpen);
  card.innerHTML = `
    <button class="student-question-toggle" type="button" aria-expanded="${isOpen}">
      <span>${questionSymbol(questionIndex)}</span>
      <strong>${isOpen ? escapeHtml(question.text) : ""}</strong>
    </button>
  `;
  card.querySelector("button").addEventListener("click", () => {
    currentQuestionIndex = isOpen ? -1 : questionIndex;
    renderStory();
  });
}

function questionSymbol(index) {
  return ["①", "②", "③"][index] || `${index + 1}`;
}

function renderProfessionalAnswer(card, story, question) {
  const answers = storyAnswer(story.id);
  if (question.type === "choice") {
    const row = document.createElement("div");
    row.className = "option-row";
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.textContent = option;
      button.classList.toggle("selected", answers[question.id] === option);
      button.addEventListener("click", () => {
        answers[question.id] = option;
        saveState();
        renderStory();
      });
      row.appendChild(button);
    });
    card.appendChild(row);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.className = "merged-textarea";
  textarea.value = answers[`${question.id}Text`] || "";
  textarea.placeholder = "記錄受試者的原句回答";
  textarea.addEventListener("input", () => {
    answers[`${question.id}Text`] = textarea.value;
    saveState();
  });

  const drawing = document.createElement("div");
  drawing.className = "merged-input";
  drawing.innerHTML = `
    <div class="canvas-toolbar">
      <button class="tool-button" data-tool="pen" type="button" aria-label="手寫">${icon("pen")}</button>
      <button class="tool-button" data-tool="type" type="button" aria-label="打字">${icon("keyboard")}</button>
      <div class="eraser-menu">
        <button class="tool-button" data-tool="eraser-menu" type="button" aria-label="擦膠">${icon("eraser")}</button>
        <div class="eraser-options hidden">
          <button data-eraser-size="18" type="button"><span></span></button>
          <button data-eraser-size="36" type="button"><span></span></button>
        </div>
      </div>
      <button class="tool-button" data-tool="clear" type="button" aria-label="清除">${icon("trash")}</button>
    </div>
    <div class="canvas-stage"><canvas aria-label="手寫答案畫布"></canvas></div>
  `;

  const stage = drawing.querySelector(".canvas-stage");
  stage.appendChild(textarea);
  card.appendChild(drawing);
  const canvas = drawing.querySelector("canvas");
  const api = setupCanvas(canvas, `${story.id}.${question.id}Drawing`, drawing, textarea);
  activeCanvases.push(api);
}

function setupCanvas(canvas, key, root, textarea) {
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let tool = "idle";
  let eraserSize = 24;
  let last = null;
  let activePointerId = null;
  let currentStroke = null;
  let saveStrokesTimer = null;
  let pendingPoints = [];
  let animationFrame = null;
  let lastDrawn = null;
  let suppressPointerUntil = 0;

  const getValue = () => {
    const [storyId, field] = key.split(".");
    return storyAnswer(storyId)[field] || "";
  };

  const setValue = (value) => {
    const [storyId, field] = key.split(".");
    storyAnswer(storyId)[field] = value;
    saveState();
  };

  function strokesField() {
    const [, field] = key.split(".");
    return field.replace("Drawing", "Strokes");
  }

  function getStrokes() {
    const [storyId] = key.split(".");
    return storyAnswer(storyId)[strokesField()] || [];
  }

  function setStrokes(strokes) {
    const [storyId] = key.split(".");
    storyAnswer(storyId)[strokesField()] = strokes;
    saveState();
  }

  function saveStrokesNow() {
    flushPendingDraw();
    clearTimeout(saveStrokesTimer);
    saveStrokesTimer = null;
    if (currentStroke) {
      setStrokes([...getStrokes(), currentStroke]);
      currentStroke = null;
    }
  }

  function scheduleStrokesSave() {
    clearTimeout(saveStrokesTimer);
    saveStrokesTimer = setTimeout(saveStrokesNow, 1500);
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const ratio = 1;
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);
    const strokes = getStrokes();
    if (strokes.length) {
      renderStrokes(ctx, strokes, rect.width, rect.height);
      return;
    }
    const saved = getValue();
    if (saved) drawImage(saved);
  }

  function drawImage(src) {
    const img = new Image();
    img.onload = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      ctx.drawImage(img, 0, 0, rect.width, rect.height);
    };
    img.src = src;
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {
      x,
      y,
      nx: rect.width ? x / rect.width : 0,
      ny: rect.height ? y / rect.height : 0,
    };
  }

  function touchPoint(touch) {
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    return {
      x,
      y,
      nx: rect.width ? x / rect.width : 0,
      ny: rect.height ? y / rect.height : 0,
    };
  }

  function draw(from, to, strokeTool = tool, strokeWidth = eraserSize) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = strokeTool === "eraser" ? strokeWidth : 3;
    ctx.strokeStyle = strokeTool === "eraser" ? "#ffffff" : "#111111";
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  function queueDraw(pointToDraw) {
    pendingPoints.push(pointToDraw);
    if (animationFrame) return;
    animationFrame = requestAnimationFrame(() => {
      animationFrame = null;
      const points = pendingPoints.splice(0);
      points.forEach((next) => {
        if (lastDrawn) draw(lastDrawn, next, currentStroke.tool, currentStroke.width);
        lastDrawn = next;
      });
    });
  }

  function flushPendingDraw() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    const points = pendingPoints.splice(0);
    points.forEach((next) => {
      if (lastDrawn && currentStroke) draw(lastDrawn, next, currentStroke.tool, currentStroke.width);
      lastDrawn = next;
    });
  }

  function beginStroke(startPoint, pointerId) {
    saveStrokesNow();
    drawing = true;
    activePointerId = pointerId;
    last = startPoint;
    lastDrawn = startPoint;
    pendingPoints = [];
    currentStroke = {
      tool,
      width: tool === "eraser" ? eraserSize : 3,
      points: [{ x: startPoint.nx, y: startPoint.ny }],
    };
  }

  function continueStroke(nextPoint) {
    currentStroke.points.push({ x: nextPoint.nx, y: nextPoint.ny });
    queueDraw(nextPoint);
    last = nextPoint;
  }

  function endStroke() {
    flushPendingDraw();
    drawing = false;
    activePointerId = null;
    last = null;
    lastDrawn = null;
    scheduleStrokesSave();
  }

  function canDrawWithPointer(event) {
    if (event.pointerType === "touch") {
      if (looksLikePalm(event)) return false;
      return looksLikeStylus(event);
    }
    return true;
  }

  function canDrawWithTouch(touch) {
    if (touch.touchType === "stylus") return true;
    const width = Number(touch.radiusX || touch.webkitRadiusX) || 1;
    const height = Number(touch.radiusY || touch.webkitRadiusY) || 1;
    if (width >= 28 || height >= 28) return false;
    return width <= 14 && height <= 14;
  }

  function changedTouch(event, id = activePointerId) {
    return Array.from(event.changedTouches).find((touch) => `touch:${touch.identifier}` === id);
  }

  function looksLikeStylus(event) {
    const width = Number(event.width) || 1;
    const height = Number(event.height) || 1;
    return width <= 18 && height <= 18;
  }

  function looksLikePalm(event) {
    const width = Number(event.width) || 1;
    const height = Number(event.height) || 1;
    return width >= 32 || height >= 32;
  }

  function updatePointerMode() {
    canvas.style.pointerEvents = tool === "idle" || tool === "type" ? "none" : "auto";
    canvas.style.touchAction = "none";
    canvas.parentElement.style.touchAction = "none";
  }

  canvas.style.pointerEvents = "none";
  updatePointerMode();

  canvas.addEventListener("pointerdown", (event) => {
    if (tool === "idle" || tool === "type") return;
    if (Date.now() < suppressPointerUntil) return;
    if (!canDrawWithPointer(event)) return;
    event.preventDefault();
    beginStroke(point(event), event.pointerId);
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawing || !last) return;
    if (activePointerId !== event.pointerId) return;
    if (!canDrawWithPointer(event)) return;
    event.preventDefault();
    continueStroke(point(event));
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!drawing) return;
    if (activePointerId !== event.pointerId) return;
    event.preventDefault();
    endStroke();
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
  });
  canvas.addEventListener("pointercancel", (event) => {
    if (activePointerId !== event.pointerId) return;
    event.preventDefault();
    endStroke();
  });

  canvas.addEventListener("touchstart", (event) => {
    if (tool === "idle" || tool === "type") return;
    const touch = Array.from(event.changedTouches).find(canDrawWithTouch);
    if (!touch) return;
    event.preventDefault();
    suppressPointerUntil = Date.now() + 700;
    beginStroke(touchPoint(touch), `touch:${touch.identifier}`);
  }, { passive: false });

  canvas.addEventListener("touchmove", (event) => {
    if (!drawing || !last || typeof activePointerId !== "string") return;
    const touch = changedTouch(event);
    if (!touch || !canDrawWithTouch(touch)) return;
    event.preventDefault();
    suppressPointerUntil = Date.now() + 700;
    continueStroke(touchPoint(touch));
  }, { passive: false });

  canvas.addEventListener("touchend", (event) => {
    if (!drawing || typeof activePointerId !== "string") return;
    const touch = changedTouch(event);
    if (!touch) return;
    event.preventDefault();
    suppressPointerUntil = Date.now() + 700;
    endStroke();
  }, { passive: false });

  canvas.addEventListener("touchcancel", (event) => {
    if (!drawing || typeof activePointerId !== "string") return;
    const touch = changedTouch(event);
    if (!touch) return;
    event.preventDefault();
    suppressPointerUntil = Date.now() + 700;
    endStroke();
  }, { passive: false });

  const eraserOptions = root.querySelector(".eraser-options");
  root.querySelectorAll("[data-eraser-size]").forEach((button) => {
    button.addEventListener("click", () => {
      eraserSize = Number(button.dataset.eraserSize);
      tool = "eraser";
      textarea.placeholder = "";
      canvas.style.pointerEvents = "auto";
      textarea.style.pointerEvents = "none";
      textarea.style.display = "none";
      updatePointerMode();
      eraserOptions.classList.add("hidden");
      root.querySelectorAll("[data-tool]").forEach((item) => item.classList.remove("active"));
      root.querySelector('[data-tool="eraser-menu"]').classList.add("active");
    });
  });

  canvas.parentElement.addEventListener("click", (event) => {
    if (tool !== "idle" || event.target.closest(".canvas-toolbar")) return;
    tool = "pen";
    textarea.placeholder = "";
    canvas.style.pointerEvents = "auto";
    textarea.style.pointerEvents = "none";
    textarea.style.display = "none";
    updatePointerMode();
    root.querySelector('[data-tool="pen"]').classList.add("active");
  });

  root.querySelectorAll("[data-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.tool;
      textarea.placeholder = "";
      if (selected === "eraser-menu") {
        eraserOptions.classList.toggle("hidden");
        return;
      }
      if (selected === "clear") {
        clearTimeout(saveStrokesTimer);
        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = null;
        pendingPoints = [];
        lastDrawn = null;
        currentStroke = null;
        const rect = canvas.parentElement.getBoundingClientRect();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, rect.width, rect.height);
        textarea.value = "";
        const [storyId, field] = key.split(".");
        storyAnswer(storyId)[field.replace("Drawing", "Text")] = "";
        storyAnswer(storyId)[strokesField()] = [];
        storyAnswer(storyId)[field] = "";
        saveState();
        textarea.placeholder = "記錄受試者的原句回答";
        root.querySelectorAll("[data-tool]").forEach((item) => item.classList.remove("active"));
        eraserOptions.classList.add("hidden");
        tool = "idle";
        canvas.style.pointerEvents = "none";
        textarea.style.pointerEvents = "none";
        textarea.style.display = "block";
        updatePointerMode();
        return;
      }
      if (selected === "type") {
        tool = selected;
        canvas.style.pointerEvents = "none";
        textarea.style.pointerEvents = "auto";
        textarea.style.display = "block";
        updatePointerMode();
        textarea.focus();
        eraserOptions.classList.add("hidden");
        root.querySelectorAll("[data-tool]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        return;
      }
      tool = selected;
      canvas.style.pointerEvents = "auto";
      textarea.style.pointerEvents = "none";
      textarea.style.display = "none";
      updatePointerMode();
      eraserOptions.classList.add("hidden");
      root.querySelectorAll("[data-tool]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  function deactivate() {
    tool = "idle";
    drawing = false;
    activePointerId = null;
    last = null;
    lastDrawn = null;
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    pendingPoints = [];
    saveStrokesNow();
    canvas.style.pointerEvents = "none";
    textarea.style.pointerEvents = "none";
    textarea.style.display = "block";
    updatePointerMode();
    eraserOptions.classList.add("hidden");
    root.querySelectorAll("[data-tool]").forEach((item) => item.classList.remove("active"));
  }

  return { resize, deactivate, flush: saveStrokesNow };
}

function renderStrokes(ctx, strokes, width, height) {
  strokes.forEach((stroke) => {
    const points = stroke.points || [];
    if (points.length < 2) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = stroke.tool === "eraser" ? stroke.width || 24 : stroke.width || 3;
    ctx.strokeStyle = stroke.tool === "eraser" ? "#ffffff" : "#111111";
    ctx.beginPath();
    ctx.moveTo(points[0].x * width, points[0].y * height);
    points.slice(1).forEach((point) => ctx.lineTo(point.x * width, point.y * height));
    ctx.stroke();
  });
}

function drawingDataUrl(answers, questionId) {
  const strokes = answers[`${questionId}Strokes`] || [];
  if (!strokes.length) return answers[`${questionId}Drawing`] || "";
  const exportCanvas = document.createElement("canvas");
  const width = 900;
  const height = 430;
  exportCanvas.width = width;
  exportCanvas.height = height;
  const exportCtx = exportCanvas.getContext("2d");
  exportCtx.fillStyle = "#ffffff";
  exportCtx.fillRect(0, 0, width, height);
  renderStrokes(exportCtx, strokes, width, height);
  return exportCanvas.toDataURL("image/png");
}

function nextStory() {
  flushActiveCanvases();
  if (currentStoryIndex < STORIES.length - 1) {
    currentStoryIndex += 1;
    currentQuestionIndex = -1;
    renderStory();
    return;
  }
  showScreen(state.mode === "professional" ? "generate" : "thank");
}

function prevStory() {
  flushActiveCanvases();
  if (currentStoryIndex > 0) {
    currentStoryIndex -= 1;
    currentQuestionIndex = -1;
    renderStory();
  }
}

function renderScoring() {
  const story = STORIES[scoringIndex];
  const answers = storyAnswer(story.id);
  elements.scoringProgress.textContent = `Scoring ${scoringIndex + 1} / ${STORIES.length}`;
  elements.scoringTitle.textContent = `Q${scoringIndex + 1}: TOM ability: ${story.ability}`;
  elements.scoringTom.textContent = "";
  elements.scoringTom.classList.add("hidden");
  elements.scoreReminder.textContent = "";
  elements.prevScoreButton.disabled = scoringIndex === 0;
  elements.nextScoreButton.textContent = scoringIndex === STORIES.length - 1 ? "產生已評分 PDF" : "下一題";

  elements.scoringResponses.innerHTML = "";
  story.questions.forEach((question, questionIndex) => {
    const card = document.createElement("section");
    card.className = "score-answer-card";
    card.innerHTML = `<h3><span>${questionSymbol(questionIndex)}</span>${escapeHtml(question.text)}</h3>`;

    if (question.type === "choice") {
      const row = document.createElement("div");
      row.className = "score-option-row";
      question.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "score-choice-option";
        button.textContent = option;
        button.setAttribute("aria-pressed", String(answers[question.id] === option));
        button.classList.toggle("selected", answers[question.id] === option);
        button.addEventListener("click", () => {
          answers[question.id] = answers[question.id] === option ? "" : option;
          saveState();
          renderScoring();
        });
        row.appendChild(button);
      });
      card.appendChild(row);
    } else {
      const textarea = document.createElement("textarea");
      textarea.className = "score-text-input";
      textarea.value = answers[`${question.id}Text`] || "";
      textarea.placeholder = "補充或修改原句記錄";
      textarea.addEventListener("input", () => {
        answers[`${question.id}Text`] = textarea.value;
        saveState();
      });
      card.appendChild(textarea);

      const drawing = drawingDataUrl(answers, question.id);
      if (drawing) {
        const img = document.createElement("img");
        img.alt = "手寫答案";
        img.src = drawing;
        card.appendChild(img);
      }
    }

    elements.scoringResponses.appendChild(card);
  });

  elements.scoringReference.innerHTML = `
    <section class="reference-section">
      ${referenceHtml("Score 0", story.reference.score0)}
      ${referenceHtml("Score 1", story.reference.score1)}
      ${referenceHtml("Score 2", story.reference.score2)}
    </section>
  `;

  document.querySelectorAll(".score-button").forEach((button) => {
    button.classList.toggle("selected", String(state.scores[story.id] ?? "") === button.dataset.score);
  });
}

function startScoring() {
  scoringIndex = 0;
  renderScoring();
  showScreen("scoring");
}

function showNorms() {
  elements.normsTableHead.innerHTML = `
    <tr>
      <th>Q</th>
      <th>TOM ability</th>
      ${NORM_AGE_BANDS.map((ageBand) => `<th>${ageBand}</th>`).join("")}
      <th>p value</th>
    </tr>
  `;
  const rows = STORIES.map((story) => `
    <tr>
      <td>${escapeHtml(story.id.toUpperCase())}</td>
      <td>${escapeHtml(story.ability)}</td>
      ${NORM_MEANS[story.id].map((mean) => `<td>${mean.toFixed(2)}</td>`).join("")}
      <td>${escapeHtml(NORM_P_VALUES[story.id])}</td>
    </tr>
  `).join("");
  elements.normsTableBody.innerHTML = `
    ${rows}
    <tr class="norm-total-row">
      <td>Total</td>
      <td>All questions</td>
      ${NORM_TOTALS.map((mean) => `<td>${mean.toFixed(2)}</td>`).join("")}
      <td>${escapeHtml(NORM_P_VALUES.total)}</td>
    </tr>
  `;
  showScreen("norms");
}

function setScore(score) {
  state.scores[STORIES[scoringIndex].id] = Number(score);
  saveState();
  renderScoring();
}

function nextScore() {
  const story = STORIES[scoringIndex];
  if (state.scores[story.id] === undefined && !scoreSkipWarnings[story.id]) {
    scoreSkipWarnings[story.id] = true;
    elements.scoreReminder.textContent = "此題尚未評分。如需略過，請再按一次下一題。";
    return;
  }
  if (scoringIndex < STORIES.length - 1) {
    scoringIndex += 1;
    renderScoring();
    return;
  }
  generateReport({ includeScores: true });
}

function previousScore() {
  if (scoringIndex > 0) {
    scoringIndex -= 1;
    renderScoring();
  }
}

function generateReport({ includeScores }) {
  const win = window.open("", "_blank");
  if (!win) {
    alert("請允許彈出視窗，然後再按一次產生 PDF。");
    return;
  }
  win.document.write(reportHtml(includeScores));
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 500);
}

function reportHtml(includeScores) {
  const total = STORIES.reduce((sum, story) => sum + (Number(state.scores[story.id]) || 0), 0);
  const hasUnscored = includeScores && STORIES.some((story) => state.scores[story.id] === undefined);
  const norm = normSummary(total);
  return `<!doctype html>
  <html lang="zh-Hant">
    <head>
      <meta charset="UTF-8" />
      <title>Strange Stories Record</title>
      <style>
        body { font-family: Arial, "PingFang TC", sans-serif; color: #202124; margin: 28px; }
        h1 { font-size: 22px; margin: 0 0 14px; }
        table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 10.5px; }
        th, td { border: 1px solid #777; padding: 6px; vertical-align: top; }
        th { background: #f1f1f1; }
        .info { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 18px; font-size: 12px; }
        .drawing { max-width: 240px; max-height: 130px; display: block; margin-top: 4px; border: 1px solid #bbb; }
        .score { text-align: center; font-weight: 700; }
        .unscored { color: #c62828; background: #ffebee; }
        .unscored-note { color: #c62828; font-weight: 800; }
        .statement { margin-top: 14px; padding: 10px; border: 1px solid #aaa; background: #f7f7f7; font-size: 12px; }
        .statement strong { font-weight: 800; }
        .below { color: #c62828; font-weight: 800; }
        .norm-block { break-inside: avoid; page-break-inside: avoid; }
        .norm-overview { font-size: 8.5px; }
        .norm-overview th, .norm-overview td { padding: 4px; text-align: center; }
        @media print { body { margin: 16mm; } }
      </style>
    </head>
    <body>
      <h1>Strange Stories Test (Happe, 1994) Record Sheet</h1>
      <section class="info">
        <div>Name of Student (English): ${escapeHtml(state.client.englishName)}</div>
        <div>(Chinese): ${escapeHtml(state.client.chineseName)}</div>
        <div>School: ${escapeHtml(state.client.school)}</div>
        <div>Class: ${escapeHtml(state.client.className)}</div>
        <div>Date of assessment: ${escapeHtml(state.client.assessmentDate)}</div>
        <div>Date of Birth: ${escapeHtml(state.client.dateOfBirth)} &nbsp; Age: ${escapeHtml(state.client.age)}</div>
      </section>
      <table>
        <thead>
          <tr>
            <th>Q</th>
            <th>Story</th>
            <th>Option</th>
            <th>Explanation</th>
            <th>TOM ability</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          ${STORIES.map((story) => reportRow(story, includeScores)).join("")}
          <tr>
            <td colspan="5" class="score">Total</td>
            <td class="score">${includeScores ? total : ""}</td>
          </tr>
        </tbody>
      </table>
      ${hasUnscored ? '<section class="statement unscored-note">Some questions are not yet scored. Please complete scoring before interpreting the total score.</section>' : ""}
      ${includeScores ? `<section class="norm-block">${normReportHtml(norm)}</section>` : ""}
    </body>
  </html>`;
}

function reportRow(story, includeScores) {
  const answers = storyAnswer(story.id);
  const option = [answers.truth, answers.where].filter(Boolean).join(", ");
  const explanation = answers.explanationText || "";
  const drawingSrc = drawingDataUrl(answers, "explanation");
  const drawing = drawingSrc
    ? `<img class="drawing" src="${drawingSrc}" alt="drawing" />`
    : "";
  const isUnscored = includeScores && state.scores[story.id] === undefined;
  const score = includeScores ? state.scores[story.id] ?? "未評分" : "";
  return `<tr>
    <td>${escapeHtml(story.id.toUpperCase())}</td>
    <td>${escapeHtml(story.title.replace(/^Q\\d+\\.\\s*/, ""))}</td>
    <td>${escapeHtml(option)}</td>
    <td>${escapeHtml(explanation)}${drawing}</td>
    <td>${escapeHtml(story.ability)}</td>
    <td class="score ${isUnscored ? "unscored" : ""}">${escapeHtml(String(score))}</td>
  </tr>`;
}

function normSummary(total) {
  const ageInfo = ageBandInfo();
  if (!ageInfo) return null;
  const { ageIndex, note } = ageInfo;
  const mean = NORM_TOTALS[ageIndex];
  return {
    ageBand: NORM_AGE_BANDS[ageIndex],
    mean,
    total,
    relation: total >= mean ? "at or above" : "below",
    ageIndex,
    note,
  };
}

function ageBandInfo() {
  const age = state.client.age || "";
  const match = age.match(/(\d+)/);
  if (!match) return null;
  const years = Number(match[1]);
  if (years < 5) return null;
  if (years > 12) {
    return {
      ageIndex: NORM_AGE_BANDS.length - 1,
      note: `The entered age is above the available norm range; the highest available norm band (${NORM_AGE_BANDS[NORM_AGE_BANDS.length - 1]}) was used for comparison.`,
    };
  }
  return { ageIndex: years - 5, note: "" };
}

function normReportHtml(norm) {
  if (!norm) {
    return `
      <section class="statement">
        Norm comparison: Age band could not be calculated from the entered age. The overall norm table is shown below for manual comparison.
      </section>
      ${normOverviewTableHtml()}`;
  }
  const rows = STORIES.map((story) => {
    const score = Number(state.scores[story.id]) || 0;
    const mean = NORM_MEANS[story.id][norm.ageIndex];
    const below = score < mean;
    return `<tr>
      <td>${escapeHtml(story.id.toUpperCase())}</td>
      <td>${escapeHtml(story.ability)}</td>
      <td class="score">${score}</td>
      <td class="score">${mean.toFixed(2)}</td>
      <td class="${below ? "below" : ""}">${below ? "below mean" : "at/above mean"}</td>
    </tr>`;
  }).join("");
  const totalComparison = norm.total >= norm.mean ? "at/above mean" : "below mean";
  const totalBelow = norm.total < norm.mean;
  return `
    <section class="statement">
      Norm comparison: Total score <strong>${norm.total}</strong> is <strong>${norm.relation}</strong> the mean for age band <strong>${norm.ageBand}</strong> (mean <strong>${norm.mean.toFixed(2)}</strong>). Norms are from O’Hare et al. (2009).
      ${norm.note ? `<br><strong>Note:</strong> ${escapeHtml(norm.note)}` : ""}
    </section>
    <table>
      <thead><tr><th>Q</th><th>TOM ability</th><th>Score</th><th>Age-band mean</th><th>Comparison</th></tr></thead>
      <tbody>${rows}<tr><td colspan="2" class="score">Total</td><td class="score">${norm.total}</td><td class="score">${norm.mean.toFixed(2)}</td><td class="${totalBelow ? "below" : ""}">${totalComparison}</td></tr></tbody>
    </table>`;
}

function normOverviewTableHtml() {
  const rows = STORIES.map((story) => `
    <tr>
      <td>${escapeHtml(story.id.toUpperCase())}</td>
      <td>${escapeHtml(story.ability)}</td>
      ${NORM_MEANS[story.id].map((mean) => `<td>${mean.toFixed(2)}</td>`).join("")}
      <td>${escapeHtml(NORM_P_VALUES[story.id])}</td>
    </tr>
  `).join("");
  return `
    <table class="norm-overview">
      <thead>
        <tr>
          <th>Q</th>
          <th>TOM ability</th>
          ${NORM_AGE_BANDS.map((ageBand) => `<th>${ageBand}</th>`).join("")}
          <th>p value</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
        <tr>
          <td class="score">Total</td>
          <td>All questions</td>
          ${NORM_TOTALS.map((mean) => `<td class="score">${mean.toFixed(2)}</td>`).join("")}
          <td>${escapeHtml(NORM_P_VALUES.total)}</td>
        </tr>
      </tbody>
    </table>`;
}

function referenceHtml(title, text) {
  const lines = title === "Score 0" && !text.startsWith("Incorrect") ? ["Incorrect", ...text.split("\n")] : text.split("\n");
  const body = lines.map((line) => {
    if (!line.trim()) return "";
    if (["Incorrect", "Physical state (2P)", "Partial psychological state (2M)", "Psychological state full and accurate answer (2M)"].includes(line.trim())) {
      return `<strong>${escapeHtml(line)}</strong>`;
    }
    if (["Physical", "Psychological", "physical"].includes(line.trim())) {
      return `<em>${escapeHtml(line)}</em>`;
    }
    return `<span>${escapeHtml(line)}</span>`;
  }).join("");
  return `<div class="reference-score"><h4>${title}</h4>${body}</div>`;
}

function icon(name) {
  const icons = {
    pen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L17.5 5.5a2.1 2.1 0 0 0-3 0L4 16v4z"></path><path d="M13.5 6.5l4 4"></path></svg>',
    keyboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M7 10h.01M11 10h.01M15 10h.01M19 10h.01M7 14h.01M11 14h6"></path></svg>',
    eraser: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15l8-8a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-5 5H9l-5-5z"></path><path d="M10 20l-6-6"></path></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"></path><path d="M10 11v6M14 11v6"></path><path d="M6 7l1 14h10l1-14"></path><path d="M9 7V4h6v3"></path></svg>',
  };
  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

elements.studentModeButton.addEventListener("click", () => setMode("student"));
elements.professionalModeButton.addEventListener("click", () => setMode("professional"));
elements.clientInfoButton.addEventListener("click", () => {
  renderClientForm();
  showScreen("client");
});
elements.homeScoringButton.addEventListener("click", startScoring);
elements.normsButton.addEventListener("click", showNorms);
elements.clearRecordButton.addEventListener("click", () => {
  elements.clearDialog.classList.remove("hidden");
});
elements.cancelClearButton.addEventListener("click", () => {
  elements.clearDialog.classList.add("hidden");
});
elements.confirmClearButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  state = emptyState();
  renderClientForm();
  elements.clearDialog.classList.add("hidden");
  elements.clientSaveMessage.textContent = "";
});

document.querySelectorAll("[data-go-home]").forEach((button) => {
  button.addEventListener("click", () => showScreen("home"));
});

elements.clientForm.addEventListener("input", (event) => {
  if (event.target.name === "dateOfBirth" || event.target.name === "assessmentDate") {
    event.target.value = normalizeDateInput(event.target.value);
  }
  state.client[event.target.name] = event.target.value;
  if (event.target.name === "dateOfBirth" || event.target.name === "assessmentDate") {
    const age = calculateAge(state.client.dateOfBirth, state.client.assessmentDate);
    if (age) {
      state.client.age = age;
      elements.age.value = age;
    }
  }
  saveState();
});

elements.confirmClientButton.addEventListener("click", () => {
  saveState();
  elements.clientSaveMessage.textContent = "學生資料已儲存。";
  setTimeout(() => {
    elements.clientSaveMessage.textContent = "";
  }, 2200);
});

elements.backToQ12Button.addEventListener("click", () => {
  state.mode = "professional";
  currentStoryIndex = STORIES.length - 1;
  currentQuestionIndex = -1;
  renderStory();
  showScreen("test");
});

elements.studentBackToQ12Button.addEventListener("click", () => {
  state.mode = "student";
  currentStoryIndex = STORIES.length - 1;
  currentQuestionIndex = -1;
  renderStory();
  showScreen("test");
});

document.addEventListener("pointerdown", (event) => {
  if (!screens.test.classList.contains("professional-mode")) return;
  if (event.target.closest(".merged-input")) return;
  activeCanvases.forEach((canvasApi) => canvasApi.deactivate());
});

let lastTapAt = 0;
document.addEventListener(
  "touchend",
  (event) => {
    const now = Date.now();
    if (now - lastTapAt < 330 && !event.target.closest("input, textarea, canvas, .merged-input")) {
      event.preventDefault();
    }
    lastTapAt = now;
  },
  { passive: false }
);

elements.prevButton.addEventListener("click", prevStory);
elements.nextButton.addEventListener("click", nextStory);
elements.generateBlankPdfButton.addEventListener("click", () => generateReport({ includeScores: false }));
elements.startScoringButton.addEventListener("click", startScoring);
elements.prevScoreButton.addEventListener("click", previousScore);
elements.nextScoreButton.addEventListener("click", nextScore);
document.querySelectorAll(".score-button").forEach((button) => {
  button.addEventListener("click", () => setScore(button.dataset.score));
});

window.addEventListener("resize", () => activeCanvases.forEach((canvasApi) => canvasApi.resize()));
window.addEventListener("beforeunload", flushActiveCanvases);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushActiveCanvases();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey || event.metaKey || event.ctrlKey) return;
  const tag = document.activeElement?.tagName;
  if (["TEXTAREA", "INPUT", "BUTTON"].includes(tag)) return;
  if (!screens.home.classList.contains("hidden")) return;
  if (!screens.test.classList.contains("hidden")) nextStory();
});

renderClientForm();
