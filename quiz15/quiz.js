// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ scheme to take over the company involved deceit and manipulation.",
    chinese_question: "她 __________ 的计划包括欺骗和操纵以接管公司。",
    answers: [
        { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
        { option: "B", answer: "nefarious", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" },
        { option: "C", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
        { option: "D", answer: "upright", chinese_answer: "正直的", chinese_romanization: "zhèngzhí de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'nefarious' means wicked or criminal." +
        "<br><br>" +
        "(A) 'honest' means free of deceit and untruthfulness; sincere." +
        "<br><br>" +
        "(C) 'transparent' means easy to perceive or detect; having thoughts, feelings, or motives that are easily perceived." +
        "<br><br>" +
        "(D) 'upright' means strictly honorable or honest.",
    chinese_explanation: "(B) '邪恶的' 意味着邪恶或犯罪的。" +
        "<br><br>" +
        "(A) '诚实的' 意味着没有欺骗和不真实的；真诚的。" +
        "<br><br>" +
        "(C) '透明的' 意味着容易感知或检测的；思想、感情或动机容易被察觉的。" +
        "<br><br>" +
        "(D) '正直的' 意味着严格的光荣或诚实的。"
    },
    {
        id: 2,
    question: "The mountain road was __________, winding back and forth with sharp curves that required careful navigation.",
    chinese_question: "山路非常 __________，蜿蜒曲折，有许多急转弯，需要小心驾驶。",
    answers: [
        { option: "A", answer: "serpentine", chinese_answer: "蜿蜒的", chinese_romanization: "wānyán de" },
        { option: "B", answer: "straight", chinese_answer: "直的", chinese_romanization: "zhí de" },
        { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
        { option: "D", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'serpentine' means having many bends and turns; winding like a snake." +
        "<br><br>" +
        "(B) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
        "<br><br>" +
        "(C) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
        "<br><br>" +
        "(D) 'linear' means arranged in or extending along a straight or nearly straight line.",
    chinese_explanation: "(A) '蜿蜒的' 意味着有很多弯曲和转折的；像蛇一样蜿蜒。" +
        "<br><br>" +
        "(B) '直的' 意味着仅向一个方向延伸或移动；没有弯曲或转弯的。" +
        "<br><br>" +
        "(C) '直接的' 意味着通过最短的路从一个地方延伸或移动到另一个地方，没有改变方向或停止。" +
        "<br><br>" +
        "(D) '线性的' 意味着排列成或沿着一条直线或几乎直线延伸的。"
    },
    {
        id: 3,
        question: "His __________ attempt to ask a question during the meeting was barely audible as he spoke in a very soft voice.",
        chinese_question: "他在会议上 __________ 地尝试提问，由于他讲话非常轻声，几乎听不见。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "timid", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
            { option: "C", answer: "forceful", chinese_answer: "强有力的", chinese_romanization: "qiáng yǒulì de" },
            { option: "D", answer: "vigorous", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(C) 'forceful' means strong and assertive; vigorous and powerful." +
            "<br><br>" +
            "(D) 'vigorous' means strong, healthy, and full of energy.",
        chinese_explanation: "(B) '胆怯的' 意味着缺乏勇气或信心的；容易受到惊吓的。" +
            "<br><br>" +
            "(A) '自信的' 意味着具有或表现出自信和强有力的个性。" +
            "<br><br>" +
            "(C) '强有力的' 意味着强壮和自信的；精力充沛和强有力的。" +
            "<br><br>" +
            "(D) '精力充沛的' 意味着强壮、健康和充满活力的。"
    },
    {
        id: 4,
        question: "She received an __________ phone call in the middle of the night, prompting her to rush to the hospital immediately.",
        chinese_question: "她在半夜接到一个 __________ 的电话，促使她立刻赶往医院。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "urgent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urgent' means requiring immediate action or attention." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '紧急的' 意味着需要立即采取行动或关注。" +
            "<br><br>" +
            "(A) '随意的' 意味着放松和不关心。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小。"
    },
    {
        id: 5,
        question: "The charity was surprised by the __________ donation from such a wealthy individual.",
        chinese_question: "慈善机构对这位富有个人的 __________ 捐赠感到惊讶。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "B", answer: "parsimonious", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "C", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "D", answer: "bountiful", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'parsimonious' means unwilling to spend money or use resources; stingy or frugal." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected." +
            "<br><br>" +
            "(C) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(D) 'bountiful' means large in quantity; abundant.",
        chinese_explanation: "(B) '吝啬的' 意味着不愿花钱或使用资源；吝啬或节俭的。" +
            "<br><br>" +
            "(A) '慷慨的' 意味着准备给予比严格必要或预期更多的东西，如金钱或时间。" +
            "<br><br>" +
            "(C) '丰富的' 意味着以大量存在或可用的；充裕的。" +
            "<br><br>" +
            "(D) '大量的' 意味着数量大的；丰富的。"
    },
    {
        id: 6,
    question: "Their rivalry was so intense that they became __________ enemies, each determined to destroy the other.",
    chinese_question: "他们的竞争如此激烈，以至于他们成为了 __________ 的敌人，各自决心摧毁对方。",
    answers: [
        { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "B", answer: "mortal", chinese_answer: "不共戴天的", chinese_romanization: "bù gòng dàitiān de" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mortal' means deadly or implacable." +
        "<br><br>" +
        "(A) 'friendly' means kind and pleasant." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(B) '不共戴天的' 意味着致命的或不妥协的。" +
        "<br><br>" +
        "(A) '友好的' 意味着友善和愉快的。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 7,
        question: "Ensuring the safety of the passengers is __________ for the airline, above all other concerns.",
        chinese_question: "确保乘客的安全对航空公司来说是 __________ 的，超过所有其他关切。",
        answers: [
            { option: "A", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "paramount", chinese_answer: "最重要的", chinese_romanization: "zuì zhòngyào de" },
            { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paramount' means more important than anything else; supreme." +
            "<br><br>" +
            "(A) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth considering.",
        chinese_explanation: "(C) '最重要的' 意味着比其他任何事情都重要的；至高无上的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在某人或某事之后的，或比某人或某事重要性小的，或从某人或某事产生的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 8,
        question: "He was so __________ with his thoughts that he didn't notice the time passing by.",
        chinese_question: "他 __________ 于自己的思绪，以至于没有注意到时间的流逝。",
        answers: [
            { option: "A", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" },
            { option: "B", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" },
            { option: "C", answer: "preoccupied", chinese_answer: "全神贯注的", chinese_romanization: "quánshén guànzhù de" },
            { option: "D", answer: "present", chinese_answer: "在场的", chinese_romanization: "zàichǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) ' preoccupied' means engrossed in thought; distracted." +
            "<br><br>" +
            "(A) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(B) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim." +
            "<br><br>" +
            "(D) 'present' means in a particular place.",
        chinese_explanation: "(C) '全神贯注的' 意味着沉浸在思绪中；分心的。" +
            "<br><br>" +
            "(A) '专心的' 意味着对某事密切注意的。" +
            "<br><br>" +
            "(B) '集中的' 意味着对某个目标投入大量的注意力、兴趣或活动的。" +
            "<br><br>" +
            "(D) '在场的' 意味着在特定地方的。"
    },
    {
        id: 9,
        question: "Her __________ dedication to the cause inspired many volunteers to join.",
        chinese_question: "她对事业__________的奉献激励了许多志愿者加入。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "zealous", chinese_answer: "热心的", chinese_romanization: "rèxīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zealous' means having or showing great energy or enthusiasm in pursuit of a cause or objective." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(B) '热心的'一词意味着对追求某一事业或目标表现出极大的精力或热情。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；漠不关心的。" +
            "<br><br>" +
            "(D) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 10,
        question: "The __________ selection process ensured that only the most qualified candidates were chosen.",
        chinese_question: "__________ 的甄选过程确保只有最合格的候选人被选中。",
        answers: [
            { option: "A", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "rigorous", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rigorous' means extremely thorough, exhaustive, or accurate, often used figuratively to describe a very strict and demanding process." +
            "<br><br>" +
            "(A) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(D) 'lenient' means permissive, merciful, or tolerant.",
        chinese_explanation: "(C) '严格的' 意味着极其彻底、详尽或准确的，通常用作比喻来描述一种非常严格和要求高的过程。" +
            "<br><br>" +
            "(A) '松懈的' 意味着不够严格、严厉或小心的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(D) '宽松的' 意味着宽容、仁慈或或宽容。"
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
