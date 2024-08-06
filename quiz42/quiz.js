// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "After working on the complex puzzle for hours, she was completely __________, unable to see how the pieces fit together.",
    chinese_question: "在花了几个小时解决复杂的拼图之后，她完全 __________，无法看清这些碎片如何拼合在一起。",
    answers: [
        { option: "A", answer: "clear-headed", chinese_answer: "头脑清醒的", chinese_romanization: "tóunǎo qīngxǐng de" },
        { option: "B", answer: "befuddled", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
        { option: "C", answer: "certain", chinese_answer: "确信的", chinese_romanization: "quèxìn de" },
        { option: "D", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'befuddled' means unable to think clearly; confused." +
        "<br><br>" +
        "(A) 'clear-headed' means having a clear mind; able to think clearly." +
        "<br><br>" +
        "(C) 'certain' means sure; having no doubt." +
        "<br><br>" +
        "(D) 'focused' means having a clear aim or goal; concentrated.",
    chinese_explanation: "(B) '困惑的' 意味着无法清晰思考；感到困惑的。" +
        "<br><br>" +
        "(A) '头脑清醒的' 意味着头脑清晰的；能够清晰地思考。" +
        "<br><br>" +
        "(C) '确信的' 意味着肯定的；没有怀疑的。" +
        "<br><br>" +
        "(D) '专注的' 意味着有明确的目标或目标；集中的。"
    },
    {
        id: 2,
    question: "The detective considered her alibi __________ until new evidence came to light that contradicted her statements and showed she was lying.",
    chinese_question: "侦探认为她的不在场证明是__________的，直到新的证据浮出水面，证据与她的陈述相矛盾，并显示她在撒谎。",
    answers: [
        { option: "A", answer: "implausible", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" },
        { option: "B", answer: "ridiculous", chinese_answer: "可笑的", chinese_romanization: "kěxiào de" },
        { option: "C", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "D", answer: "absurd", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'plausible' means seeming reasonable or probable. Figuratively, it can mean being believable or credible." +
        "<br><br>" +
        "(A) 'implausible' means not seeming reasonable or probable; failing to convince." +
        "<br><br>" +
        "(B) 'ridiculous' means deserving or inviting derision or mockery; absurd." +
        "<br><br>" +
        "(D) 'absurd' means wildly unreasonable, illogical, or inappropriate.",
    chinese_explanation: "(C) '合理的'一词意味着看起来合理或可能的。比喻地，它可以表示可信的或可靠的。" +
        "<br><br>" +
        "(A) '不合理的' 意味着看起来不合理或不可能的；不能令人信服的。" +
        "<br><br>" +
        "(B) '可笑的' 意味着值得或邀请嘲笑或嘲弄的；荒谬的。" +
        "<br><br>" +
        "(D) '荒谬的' 意味着非常不合理的，荒谬的或不合适的。"
    },
    {
        id: 3,
    question: "His __________ display of wealth, including flashy cars and extravagant parties, made him the talk of the town.",
    chinese_question: "他 __________ 地炫耀财富，包括炫耀的汽车和奢华的派对，使他成为镇上的话题。",
    answers: [
        { option: "A", answer: "ostentatious", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
        { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
        { option: "D", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
        "<br><br>" +
        "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(C) 'humble' means having or showing a modest or low estimate of one's own importance." +
        "<br><br>" +
        "(D) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate.",
    chinese_explanation: "(A) '炫耀的' 意味着以庸俗或自命不凡的展示为特征；旨在给人留下深刻印象或引起注意。" +
        "<br><br>" +
        "(B) '谦虚的' 意味着对自己的能力或成就持谦逊态度的。" +
        "<br><br>" +
        "(C) '谦逊的' 意味着有或表现出对自己重要性或地位的谦逊或低估。" +
        "<br><br>" +
        "(D) '克制的' 意味着以保留或适度为特征的；不动感情或冷静的。"
    },
    {
        id: 4,
        question: "The new law aims to create an __________ system that ensures all citizens have equal access to healthcare.",
        chinese_question: "新法律旨在建立一个 __________ 的系统，确保所有公民都能平等获得医疗服务。",
        answers: [
            { option: "A", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" },
            { option: "B", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "C", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "D", answer: "prejudiced", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equitable' means fair and impartial." +
            "<br><br>" +
            "(A) 'unfair' means not based on or behaving according to the principles of equality and justice." +
            "<br><br>" +
            "(B) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice; bigoted.",
        chinese_explanation: "(C) '公平的' 意味着公正和不偏不倚的。" +
            "<br><br>" +
            "(A) '不公平的' 意味着不基于或不按平等和正义原则行事的。" +
            "<br><br>" +
            "(B) '有偏见的' 意味着对某人或某事物不公平地有偏见的。" +
            "<br><br>" +
            "(D) '偏见的' 意味着表现出或显示出由偏见产生的不喜欢或不信任的；偏执的。"
    },
    {
        id: 5,
    question: "The __________ pattern of the fabric made it very unique and eye-catching.",
    chinese_question: "织物的 __________ 图案使它非常独特和引人注目。",
    answers: [
        { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "B", answer: "peculiar", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
        { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
        { option: "D", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'peculiar' means strange or unusual." +
        "<br><br>" +
        "(A) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(C) 'typical' means having the distinctive qualities of a particular type of person or thing." +
        "<br><br>" +
        "(D) 'standard' means used or accepted as normal or average.",
    chinese_explanation: "(B) “奇怪的” 意味着奇怪或不寻常。" +
        "<br><br>" +
        "(A) '普通的' 意味着没有特殊或独特的特征；正常的。" +
        "<br><br>" +
        "(C) '典型的' 意味着具有某种特定类型的人或物的独特品质。" +
        "<br><br>" +
        "(D) '标准的' 意味着被用作正常或平均的。"
    },
    {
        id: 6,
    question: "The counter staff was __________ by the unusual request from the customer, unsure of how to handle it.",
    chinese_question: "柜台工作人员对顾客的异常要求感到 __________ ，不确定如何处理。",
    answers: [
        { option: "A", answer: "amused", chinese_answer: "有趣", chinese_romanization: "yǒuqù" },
        { option: "B", answer: "nonplussed", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "C", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "D", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'nonplussed' means to surprise and confuse someone so much that they are unsure how to react." +
        "<br><br>" +
        "(A) 'amused' means finding something funny or entertaining." +
        "<br><br>" +
        "(C) 'delighted' means feeling great pleasure." +
        "<br><br>" +
        "(D) 'relaxed' means free from tension and anxiety.",
    chinese_explanation: "(B) '使困惑' 意味着让某人感到惊讶和困惑，以至于他们不确定如何反应。" +
        "<br><br>" +
        "(A) '有趣' 意味着觉得某事有趣或娱乐性。" +
        "<br><br>" +
        "(C) '高兴' 意味着感到很大的快乐。" +
        "<br><br>" +
        "(D) '放松' 意味着无紧张和焦虑。"
    },
    {
        id: 7,
        question: "When asked about his progress on the project, he gave a __________ reply, saying he had already done so much that he was considering a vacation, which was not a proper update.",
        chinese_question: "当被问及他的项目进展时，他给了一个 __________ 的回答，说他已经做了这么多，正在考虑度假，这不是一个合适的更新。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "B", answer: "sarcastic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sarcastic' means marked by or given to using irony in order to mock or convey contempt." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
        chinese_explanation: "(B) '讽刺的' 意味着以讽刺的方式进行，或用来讥讽或传达轻蔑的。" +
            "<br><br>" +
            "(A) '真诚的' 意味着没有伪装或欺骗的；出于真诚的感情的。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估的。"
    },
    {
        id: 8,
    question: "She was known for being __________, never hesitating to voice her opinions even when they were controversial.",
    chinese_question: "她以 __________ 闻名，从不犹豫表达自己的意见，即使这些意见是有争议的。",
    answers: [
        { option: "A", answer: "outspoken", chinese_answer: "直言不讳的", chinese_romanization: "zhí yán bù huì de" },
        { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
        { option: "C", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" },
        { option: "D", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'outspoken' means frank in stating one's opinions, especially if they are critical or controversial." +
        "<br><br>" +
        "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
        "<br><br>" +
        "(C) 'reserved' means slow to reveal emotion or opinions." +
        "<br><br>" +
        "(D) 'quiet' means making little or no noise.",
    chinese_explanation: "(A) '直言不讳的' 意味着坦率地陈述自己的意见，尤其是批评性的或有争议的意见。" +
        "<br><br>" +
        "(B) '胆小的' 意味着缺乏勇气或信心；容易受惊的。" +
        "<br><br>" +
        "(C) '矜持的' 意味着慢于表达情感或意见的。" +
        "<br><br>" +
        "(D) '安静的' 意味着没有或几乎没有声音的。"
    },
    {
        id: 9,
        question: "Her __________ argument convinced even the most skeptical members of the committee.",
        chinese_question: "她的 __________ 论点说服了委员会中最怀疑的成员。",
        answers: [
            { option: "A", answer: "feeble", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "B", answer: "flimsy", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "C", answer: "robust", chinese_answer: "有力的", chinese_romanization: "yǒulì de" },
            { option: "D", answer: "tenuous", chinese_answer: "牵强的", chinese_romanization: "qiānqiǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'robust' means strong and healthy; vigorous, often used figuratively to describe something forceful and convincing, such as an argument." +
            "<br><br>" +
            "(A) 'feeble' means lacking physical strength, especially as a result of age or illness." +
            "<br><br>" +
            "(B) 'flimsy' means comparatively light and insubstantial; easily damaged." +
            "<br><br>" +
            "(D) 'tenuous' means very weak or slight.",
        chinese_explanation: "(C) '有力的' 意味着强壮和健康的；有活力的，通常用作比喻来描述某物的有力和令人信服的，例如一个论点。" +
            "<br><br>" +
            "(A) '微弱的' 意味着缺乏体力的，尤其是由于年老或疾病。" +
            "<br><br>" +
            "(B) '脆弱的' 意味着相对较轻且不坚固的；容易损坏的。" +
            "<br><br>" +
            "(D) '牵强的' 意味着非常虚弱或轻微的。"
    },
    {
        id: 10,
        question: "In a __________ display of bravery, she stood up to the bully and defended her friend.",
        chinese_question: "在一次 __________ 的勇敢表现中，她站出来对抗欺负者，保护了她的朋友。",
        answers: [
            { option: "A", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "fearful", chinese_answer: "恐惧的", chinese_romanization: "kǒngjù de" },
            { option: "C", answer: "valorous", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "D", answer: "timid", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'valorous' means showing great courage in the face of danger." +
            "<br><br>" +
            "(A) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(B) 'fearful' means feeling or showing fear." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence.",
        chinese_explanation: "(C) '英勇的' 意味着在面对危险时表现出巨大的勇气。" +
            "<br><br>" +
            "(A) '胆小的' 意味着缺乏勇气的。" +
            "<br><br>" +
            "(B) '恐惧的' 意味着感到或表现出恐惧的。" +
            "<br><br>" +
            "(D) '胆怯的' 意味着表现出缺乏勇气或信心的。"
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
