// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The detective admired the thief's __________ tactics of misdirection and deception, which made him hard to catch.",
        chinese_question: "侦探钦佩小偷的__________策略，通过误导和欺骗，使他难以被抓住。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "C", answer: "wily", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "D", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wily' means skilled at gaining an advantage, especially deceitfully." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '狡猾的' 意味着擅长获得优势，特别是通过欺骗手段。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗和虚伪；真诚的。" +
            "<br><br>" +
            "(B) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(D) '直接的' 意味着简单易懂的。"
    },
    {
        id: 2,
        question: "The __________ conditions of the crowded refugee camp led to widespread illness among the inhabitants.",
        chinese_question: "拥挤的难民营的 __________ 条件导致居民中普遍的疾病。",
        answers: [
            { option: "A", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "B", answer: "immaculate", chinese_answer: "完美无瑕的", chinese_romanization: "wánměi wú xiá de" },
            { option: "C", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "D", answer: "spotless", chinese_answer: "一尘不染的", chinese_romanization: "yī chén bù rǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unsanitary' means not clean or sterile; likely to cause disease." +
            "<br><br>" +
            "(A) 'pristine' means in its original condition; unspoiled." +
            "<br><br>" +
            "(B) 'immaculate' means perfectly clean, neat, or tidy." +
            "<br><br>" +
            "(D) 'spotless' means absolutely clean or pure.",
        chinese_explanation: "(C) '不卫生的' 意味着不干净或无菌；可能导致疾病的。" +
            "<br><br>" +
            "(A) '原始的' 意味着处于原始状态的；未被破坏的。" +
            "<br><br>" +
            "(B) '完美无瑕的' 意味着完美清洁、整洁或整齐的。" +
            "<br><br>" +
            "(D) '一尘不染的' 意味着绝对干净或纯净的。"
    },
    {
        id: 3,
    question: "The __________ development in the downtown area has led to the construction of many new apartment buildings and commercial spaces.",
    chinese_question: "市中心地区的 __________ 开发导致了许多新公寓楼和商业空间的建设。",
    answers: [
        { option: "A", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
        { option: "B", answer: "suburban", chinese_answer: "郊区的", chinese_romanization: "jiāoqū de" },
        { option: "C", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
        { option: "D", answer: "agrarian", chinese_answer: "农业的", chinese_romanization: "nóngyè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'urban' means relating to, or characteristic of a city or town." +
        "<br><br>" +
        "(A) 'rural' means relating to, or characteristic of the countryside rather than the town." +
        "<br><br>" +
        "(B) 'suburban' means relating to or characteristic of a suburb." +
        "<br><br>" +
        "(D) 'agrarian' means relating to cultivated land or the cultivation of land.",
    chinese_explanation: "(C) '城市的' 意味着与城市或城镇相关或具有城市特点的。" +
        "<br><br>" +
        "(A) '乡村的' 意味着与乡村而不是城镇相关或具有乡村特点的。" +
        "<br><br>" +
        "(B) '郊区的' 意味着与郊区相关或具有郊区特点的。" +
        "<br><br>" +
        "(D) '农业的' 意味着与耕地或耕作土地有关的。"
    },
    {
        id: 4,
    question: "The actress looked __________ in her elegant evening gown, drawing everyone's admiration.",
    chinese_question: "女演员穿着优雅的晚礼服显得很 __________，引起了所有人的钦佩。",
    answers: [
        { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
        { option: "B", answer: "svelte", chinese_answer: "苗条的", chinese_romanization: "miáotiáo de" },
        { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
        { option: "D", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'svelte' means slender and elegant." +
        "<br><br>" +
        "(A) 'clumsy' means awkward in movement or handling things." +
        "<br><br>" +
        "(C) 'awkward' means causing difficulty; hard to deal with." +
        "<br><br>" +
        "(D) 'ungainly' means awkward and clumsy.",
    chinese_explanation: "(B) '苗条的' 意味着苗条和优雅的。" +
        "<br><br>" +
        "(A) '笨拙的' 意味着动作笨拙或处理事情笨拙的。" +
        "<br><br>" +
        "(C) '尴尬的' 意味着造成困难的；难以处理的。" +
        "<br><br>" +
        "(D) '笨拙的' 意味着笨拙和笨重的。"
    },
    {
        id: 5,
    question: "The new policy was aimed at reducing __________ behavior among teenagers, such as vandalism and truancy, by implementing stricter curfews and increased community support.",
    chinese_question: "新政策旨在通过实施更严格的宵禁和增加社区支持来减少青少年的__________行为，例如破坏公物和逃学。",
    answers: [
        { option: "A", answer: "exemplary", chinese_answer: "模范的", chinese_romanization: "mófàn de" },
        { option: "B", answer: "virtuous", chinese_answer: "有道德的", chinese_romanization: "yǒu dàodé de" },
        { option: "C", answer: "law-abiding", chinese_answer: "守法的", chinese_romanization: "shǒufǎ de" },
        { option: "D", answer: "delinquent", chinese_answer: "不良", chinese_romanization: "bùliáng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'delinquent' means showing or characterized by a tendency to commit crime, particularly minor crime." +
        "<br><br>" +
        "(A) 'exemplary' means serving as a desirable model; very good." +
        "<br><br>" +
        "(B) 'virtuous' means having or showing high moral standards." +
        "<br><br>" +
        "(C) 'law-abiding' means obedient to the laws of society.",
    chinese_explanation: "(D) '不良' 意味着表现或具有犯罪倾向，特别是轻微犯罪。" +
        "<br><br>" +
        "(A) '模范的' 意味着作为理想榜样的；非常好的。" +
        "<br><br>" +
        "(B) '有道德的' 意味着具有或表现出高道德标准。" +
        "<br><br>" +
        "(C) '守法的' 意味着遵守社会法律的。"
    },
    {
        id: 6,
        question: "The student's __________ nature made her a favorite among the teachers, as she always adhered to the rules and completed her assignments on time.",
        chinese_question: "这个学生 __________ 的性格使她成为老师们的宠儿，因为她总是遵守规则并按时完成作业。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "B", answer: "disobedient", chinese_answer: "不服从的", chinese_romanization: "bù fúcóng de" },
            { option: "C", answer: "disruptive", chinese_answer: "扰乱的", chinese_romanization: "rǎoluàn de" },
            { option: "D", answer: "uncooperative", chinese_answer: "不合作的", chinese_romanization: "bù hézuò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(B) 'disobedient' means refusing to obey rules or someone in authority." +
            "<br><br>" +
            "(C) 'disruptive' means causing or tending to cause disruption." +
            "<br><br>" +
            "(D) 'uncooperative' means unwilling to work with others and take directions.",
        chinese_explanation: "(A) '顺从的' 意味着遵守或愿意遵守命令或要求；服从他人意志的。" +
            "<br><br>" +
            "(B) '不服从的' 意味着拒绝服从规则或权威的人。" +
            "<br><br>" +
            "(C) '扰乱的' 意味着造成或倾向于造成干扰的。" +
            "<br><br>" +
            "(D) '不合作的' 意味着不愿意与他人合作并接受指示的。"
    },
    {
        id: 7,
    question: "The company's __________ practices led to a public outcry and legal actions.",
    chinese_question: "公司的 __________ 行为引起了公众的强烈抗议和法律诉讼。",
    answers: [
        { option: "A", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" },
        { option: "B", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhídé chēngzàn de" },
        { option: "C", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" },
        { option: "D", answer: "virtuous", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unethical' means not morally correct." +
        "<br><br>" +
        "(A) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
        "<br><br>" +
        "(B) 'commendable' means deserving praise." +
        "<br><br>" +
        "(D) 'virtuous' means having or showing high moral standards.",
    chinese_explanation: "(C) '不道德的' 意味着不符合道德原则的。" +
        "<br><br>" +
        "(A) '道德的' 意味着与道德原则或处理这些知识的分支有关的。" +
        "<br><br>" +
        "(B) '值得称赞的' 意味着值得赞扬的。" +
        "<br><br>" +
        "(D) '高尚的' 意味着有或表现出高道德标准的。"
    },
    {
        id: 8,
        question: "The new electric scooter was __________, allowing riders to weave through traffic with ease and reach their destination quickly.",
        chinese_question: "新的电动滑板车非常 __________，让骑行者可以轻松穿越交通并快速到达目的地。",
        answers: [
            { option: "A", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "B", answer: "zippy", chinese_answer: "迅捷的", chinese_romanization: "xùnjié de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" },
            { option: "D", answer: "cumbersome", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zippy' means bright, fresh, or lively; energetic and fast-moving." +
            "<br><br>" +
            "(A) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(D) 'cumbersome' means large or heavy and therefore difficult to carry or use; unwieldy.",
        chinese_explanation: "(B) '迅捷的' 意味着明亮、新鲜或活泼；精力充沛且快速移动的。" +
            "<br><br>" +
            "(A) '迟缓的' 意味着行动缓慢或不活跃。" +
            "<br><br>" +
            "(C) '昏昏欲睡的' 意味着受到昏睡的影响；懒洋洋的。" +
            "<br><br>" +
            "(D) '笨重的' 意味着大或重，因此难以携带或使用；笨拙的。"
    },
    {
        id: 9,
        question: "Her __________ refusal to accept help made it difficult for her friends to support her during tough times.",
        chinese_question: "她 __________ 地拒绝接受帮助，使得她的朋友们在艰难时期难以支持她。",
        answers: [
            { option: "A", answer: "stubborn", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "B", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "adaptable", chinese_answer: "适应的", chinese_romanization: "shìyìng de" },
            { option: "D", answer: "yielding", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(C) 'adaptable' means able to adjust to new conditions." +
            "<br><br>" +
            "(D) 'yielding' means giving way under pressure; not hard or rigid.",
        chinese_explanation: "(A) '固执的' 意味着顽强地决定不改变自己的态度或立场。" +
            "<br><br>" +
            "(B) '合作的' 意味着在共同目标的工作中相互帮助的。" +
            "<br><br>" +
            "(C) '适应的' 意味着能够适应新情况的。" +
            "<br><br>" +
            "(D) '顺从的' 意味着在压力下让步的；不坚硬或坚固的。"
    },
    {
        id: 10,
    question: "She made a __________ investment in the stock market, predicting the company's growth before anyone else did.",
    chinese_question: "她在股票市场上进行了 __________ 的投资，在其他人之前预测到了公司的增长。",
    answers: [
        { option: "A", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
        { option: "B", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
        { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "D", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
        "<br><br>" +
        "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(D) 'impulsive' means acting or done without forethought.",
    chinese_explanation: "(A) '精明的' 意味着具有或表现出敏锐的判断力；精明的。" +
        "<br><br>" +
        "(B) '天真的' 意味着缺乏经验、智慧或判断力的。" +
        "<br><br>" +
        "(C) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
        "<br><br>" +
        "(D) '冲动的' 意味着未经深思熟虑的行为或行动。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
