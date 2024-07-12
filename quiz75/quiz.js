// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The holiday provided a __________ from her daily routine, allowing her to relax and recharge.",
    chinese_question: "假期为她的日常生活提供了 __________，让她放松和充电。",
    answers: [
        { option: "A", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
        { option: "B", answer: "reprieve", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "disappointment", chinese_answer: "失望", chinese_romanization: "shīwàng" },
        { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reprieve' means a temporary relief from something, especially from something unpleasant." +
        "<br><br>" +
        "(A) 'frustration' means the feeling of being upset or annoyed as a result of being unable to change or achieve something." +
        "<br><br>" +
        "(C) 'disappointment' means sadness or displeasure caused by the non-fulfillment of one's hopes or expectations." +
        "<br><br>" +
        "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
    chinese_explanation: "(B) '缓解'一词意味着暂时缓解某事，尤其是某些不愉快的事情。" +
        "<br><br>" +
        "(A) '挫折' 意味着因为无法改变或实现某事而感到沮丧或恼怒。" +
        "<br><br>" +
        "(C) '失望' 意味着因为希望或期望未能实现而引起的悲伤或不快。" +
        "<br><br>" +
        "(D) '拒绝' 意味着对提议、想法等的拒绝或拒绝。"
    },
    {
        id: 2,
    question: "The museum discovered a __________ of ancient coins hidden in the walls of the old building.",
    chinese_question: "博物馆发现了一批藏在老建筑墙内的古代硬币。",
    answers: [
        { option: "A", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
        { option: "B", answer: "display", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
        { option: "C", answer: "collection", chinese_answer: "收藏", chinese_romanization: "shōucáng" },
        { option: "D", answer: "scattering", chinese_answer: "散布", chinese_romanization: "sànbù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hoard' means a stock or store of money or valued objects, typically one that is secret or carefully guarded." +
        "<br><br>" +
        "(B) 'display' means to put (something) in a prominent place in order that it may readily be seen." +
        "<br><br>" +
        "(C) 'collection' means a group of things or people." +
        "<br><br>" +
        "(D) 'scattering' means an act of spreading something over an area.",
    chinese_explanation: "(A) '囤积' 意味着一批货币或有价值的物品，通常是秘密或精心守护的。" +
        "<br><br>" +
        "(B) '展示' 意味着将（某物）放在显眼的位置以便随时可见。" +
        "<br><br>" +
        "(C) '收藏' 意味着一组东西或人。" +
        "<br><br>" +
        "(D) '散布' 意味着在一个区域内传播某物的行为。"
    },
    {
        id: 3,
    question: "Her house was a __________ of plants, pets, and various knick-knacks she had collected over the years.",
    chinese_question: "她的房子是一个 __________，里面有她多年来收集的植物、宠物和各种小装饰品。",
    answers: [
        { option: "A", answer: "jungle", chinese_answer: "丛林", chinese_romanization: "cónglín" },
        { option: "B", answer: "menagerie", chinese_answer: "动物园", chinese_romanization: "dòngwùyuán" },
        { option: "C", answer: "garden", chinese_answer: "花园", chinese_romanization: "huāyuán" },
        { option: "D", answer: "sanctuary", chinese_answer: "避难所", chinese_romanization: "bìnànsuǒ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'menagerie' means a strange or diverse collection of people or things." +
        "<br><br>" +
        "(A) 'jungle' means a dense forest." +
        "<br><br>" +
        "(C) 'garden' means a piece of ground used for growing flowers, fruits, or vegetables." +
        "<br><br>" +
        "(D) 'sanctuary' means a place of refuge or safety.",
    chinese_explanation: "(B) '动物园' 一词意味着人或物的奇特或多样的收藏。" +
        "<br><br>" +
        "(A) '丛林' 意味着密集的森林。" +
        "<br><br>" +
        "(C) '花园' 意味着用来种植花卉、水果或蔬菜的一块地。" +
        "<br><br>" +
        "(D) '避难所' 意味着避难或安全的地方。"
    },
    {
        id: 4,
        question: "His reputation as a financial __________ grew after his accurate predictions during the economic crisis.",
        chinese_question: "在经济危机期间，他的准确预测使他作为金融 __________ 的声誉大增。",
        answers: [
                { option: "A", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
                { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "D", answer: "learner", chinese_answer: "学习者", chinese_romanization: "xuéxí zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
                "<br><br>" +
                "(A) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
                "<br><br>" +
                "(C) 'novice' means a person new to or inexperienced in a field or situation." +
                "<br><br>" +
                "(D) 'learner' means a person who is learning a subject or skill.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
                "<br><br>" +
                "(A) '业余爱好者' 意味着从事追求，特别是体育活动，而没有报酬的人。" +
                "<br><br>" +
                "(C) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
                "<br><br>" +
                "(D) '学习者' 意味着正在学习某个学科或技能的人。"
    },
    {
        id: 5,
        question: "His __________ as a firefighter was more than just a job; it was a calling that he felt deeply passionate about.",
        chinese_question: "他的 __________ 作为一名消防员不仅仅是一份工作；这是他深感热情的使命。",
        answers: [
                { option: "A", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
                { option: "B", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
                { option: "C", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
                { option: "D", answer: "recreation", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
                "<br><br>" +
                "(A) 'pastime' means an activity that someone does regularly for enjoyment rather than work; a hobby." +
                "<br><br>" +
                "(B) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
                "<br><br>" +
                "(D) 'recreation' means activity done for enjoyment when one is not working.",
        chinese_explanation: "(C) '职业'一词意味着对特定职业或职业的强烈适应感。" +
                "<br><br>" +
                "(A) '消遣' 意味着某人定期为享乐而不是工作而做的活动；爱好。" +
                "<br><br>" +
                "(B) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
                "<br><br>" +
                "(D) '娱乐' 意味着不工作时为了享乐而进行的活动。"
    },
    {
        id: 6,
    question: "The city played __________ to the international festival, attracting visitors from around the world.",
    chinese_question: "这座城市 __________ 了国际节日，吸引了来自世界各地的游客。",
    answers: [
        { option: "A", answer: "host", chinese_answer: "主办", chinese_romanization: "zhǔbàn" },
        { option: "B", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
        { option: "C", answer: "guest", chinese_answer: "嘉宾", chinese_romanization: "jiābīn" },
        { option: "D", answer: "competitor", chinese_answer: "竞争者", chinese_romanization: "jìngzhēng zhě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'host' means to provide the space and other necessary things for a special event." +
        "<br><br>" +
        "(B) 'spectator' means a person who watches at a show, game, or other event." +
        "<br><br>" +
        "(C) 'guest' means a person who is invited to visit someone's home or attend a particular social occasion." +
        "<br><br>" +
        "(D) 'competitor' means a person who takes part in a sporting contest.",
    chinese_explanation: "(A) '主办' 意味着为特殊活动提供空间和其他必要的东西。" +
        "<br><br>" +
        "(B) '观众' 意味着在表演、比赛或其他活动中观看的人。" +
        "<br><br>" +
        "(C) '嘉宾' 意味着受邀访问某人家或参加特定社交活动的人。" +
        "<br><br>" +
        "(D) '竞争者' 意味着参加体育比赛的人。"
    },
    {
        id: 7,
    question: "Her enthusiastic response was a __________ that she liked the idea.",
    chinese_question: "她热情的回应是她喜欢这个想法的 __________。",
    answers: [
        { option: "A", answer: "signal", chinese_answer: "信号", chinese_romanization: "xìnhào" },
        { option: "B", answer: "mystery", chinese_answer: "谜", chinese_romanization: "mí" },
        { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "secret", chinese_answer: "秘密", chinese_romanization: "mìmì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'signal' means a gesture, action, or sound that is used to convey information or instructions." +
        "<br><br>" +
        "(B) 'mystery' means something that is difficult or impossible to understand or explain." +
        "<br><br>" +
        "(C) 'error' means a mistake." +
        "<br><br>" +
        "(D) 'secret' means something that is kept or meant to be kept unknown or unseen by others.",
    chinese_explanation: "(A) '信号' 意味着用来传达信息或指示的手势、动作或声音。" +
        "<br><br>" +
        "(B) '谜' 意味着难以理解或解释的事情。" +
        "<br><br>" +
        "(C) '错误' 意味着一个错误。" +
        "<br><br>" +
        "(D) '秘密' 意味着被隐瞒或意图隐瞒他人的事情。"
    },
    {
        id: 8,
    question: "There was a lot of __________ at the market as people rushed to buy goods before the storm.",
    chinese_question: "在暴风雨来临之前，人们争相购买商品，市场上 __________ 一片。",
    answers: [
        { option: "A", answer: "stillness", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" },
        { option: "B", answer: "commotion", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
        { option: "C", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
        { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'commotion' means a state of confused and noisy disturbance." +
        "<br><br>" +
        "(A) 'stillness' means the absence of movement or sound." +
        "<br><br>" +
        "(C) 'order' means the arrangement or disposition of people or things in relation to each other." +
        "<br><br>" +
        "(D) 'harmony' means agreement or concord.",
    chinese_explanation: "(B) '喧闹' 意味着一种混乱而嘈杂的干扰状态。" +
        "<br><br>" +
        "(A) '静止' 意味着没有运动或声音。" +
        "<br><br>" +
        "(C) '秩序' 意味着人与物之间的排列或布置。" +
        "<br><br>" +
        "(D) '和谐' 意味着一致或和睦。"
    },
    {
        id: 9,
    question: "Her friend's __________ was obvious when she found out that her secret had been shared without permission.",
    chinese_question: "当她发现她的秘密被未经允许分享时，朋友的 __________ 是显而易见的。",
    answers: [
        { option: "A", answer: "commendation", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
        { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "C", answer: "happiness", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
        { option: "D", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
        "<br><br>" +
        "(A) 'commendation' means praise." +
        "<br><br>" +
        "(C) 'happiness' means the state of being happy." +
        "<br><br>" +
        "(D) 'joy' means a feeling of great pleasure and happiness.",
    chinese_explanation: "(B) '责备' 意味着表示不赞成或失望。" +
        "<br><br>" +
        "(A) '表扬' 意味着赞美。" +
        "<br><br>" +
        "(C) '快乐' 意味着幸福的状态。" +
        "<br><br>" +
        "(D) '喜悦' 意味着极大的愉快和幸福的感觉。"
    },
    {
        id: 10,
    question: "Her __________ that the company was on the brink of bankruptcy shocked the board members, as they were unaware of the financial troubles.",
    chinese_question: "她 __________ 公司濒临破产的言论震惊了董事会成员，因为他们对财务问题一无所知。",
    answers: [
        { option: "A", answer: "assertion", chinese_answer: "断言", chinese_romanization: "duànyán" },
        { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "C", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assertion' means a confident and forceful statement of fact or belief." +
        "<br><br>" +
        "(B) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(C) 'denial' means the action of declaring something to be untrue." +
        "<br><br>" +
        "(D) 'silence' means complete absence of sound.",
    chinese_explanation: "(A) '断言' 意味着自信和有力的事实或信念的陈述。" +
        "<br><br>" +
        "(B) '犹豫' 意味着在说或做某事之前的停顿或犹豫行为。" +
        "<br><br>" +
        "(C) '否认' 意味着宣称某事不真实的行为。" +
        "<br><br>" +
        "(D) '沉默' 意味着完全没有声音。"
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
