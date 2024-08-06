// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "After years of estrangement, the siblings were finally __________, putting aside their differences and renewing their relationship.",
    chinese_question: "在多年疏远之后，兄弟姐妹终于 __________，放下分歧，重修旧好。",
    answers: [
        { option: "A", answer: "reconciled", chinese_answer: "和解的", chinese_romanization: "héjiě de" },
        { option: "B", answer: "estranged", chinese_answer: "疏远的", chinese_romanization: "shūyuǎn de" },
        { option: "C", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
        { option: "D", answer: "detached", chinese_answer: "分离的", chinese_romanization: "fēnlí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reconciled' means restored friendly relations between; made compatible or consistent." +
        "<br><br>" +
        "(B) 'estranged' means no longer close or affectionate to someone; alienated." +
        "<br><br>" +
        "(C) 'hostile' means unfriendly; antagonistic." +
        "<br><br>" +
        "(D) 'detached' means separate or disconnected, in particular.",
    chinese_explanation: "(A) '和解的' 意味着恢复友好关系的；使兼容或一致的。" +
        "<br><br>" +
        "(B) '疏远的' 意味着对某人不再亲近或不再有感情的；疏远的。" +
        "<br><br>" +
        "(C) '敌对的' 意味着不友好的；敌对的。" +
        "<br><br>" +
        "(D) '分离的' 意味着分开的或断开的，特别是。"
    },
    {
        id: 2,
        question: "The children marveled at the __________ kitten which fitted snugly in the caretaker's hands and purred softly.",
        chinese_question: "孩子们惊叹于那只 __________ 小猫，恰好适合看护者的手，并轻轻地发出呼噜声。",
            answers: [
                { option: "A", answer: "palm-sized", chinese_answer: "手掌大小", chinese_romanization: "shǒuzhǎng dàxiǎo" },
                { option: "B", answer: "enormous", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
                { option: "C", answer: "colossal", chinese_answer: "庞大的", chinese_romanization: "pángdà de" },
                { option: "D", answer: "hefty", chinese_answer: "沉重的", chinese_romanization: "chénzhòng de" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'palm-sized' means small enough to fit in the palm of one's hand." +
                "<br><br>" +
                "(B) 'enormous' means very large." +
                "<br><br>" +
                "(C) 'colossal' means extremely large." +
                "<br><br>" +
                "(D) 'hefty' means heavy and solid.",
            chinese_explanation: "(A) '手掌大小' 意味着小到可以放在手掌中。" +
                "<br><br>" +
                "(B) '巨大的' 意味着非常大。" +
                "<br><br>" +
                "(C) '庞大的' 意味着非常大。" +
                "<br><br>" +
                "(D) '沉重的' 意味着重而坚实。"
    },
    {
        id: 3,
        question: "She admired the __________ lines of the new sports car, appreciating its sleek design and modern features.",
        chinese_question: "她欣赏新跑车的 __________ 线条，赞叹其流线型设计和现代功能。",
        answers: [
            { option: "A", answer: "awkward", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "svelte", chinese_answer: "苗条的", chinese_romanization: "miáotiáo de" },
            { option: "C", answer: "cumbersome", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "D", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'svelte' means slender and elegant." +
            "<br><br>" +
            "(A) 'awkward' means causing or feeling embarrassment or inconvenience." +
            "<br><br>" +
            "(C) 'cumbersome' means large or heavy and therefore difficult to carry or use." +
            "<br><br>" +
            "(D) 'ungainly' means (of a person or movement) awkward; clumsy.",
        chinese_explanation: "(B) '苗条的' 意味着苗条和优雅的。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着引起或感到尴尬或不便的。" +
            "<br><br>" +
            "(C) '笨重的' 意味着大或重，因此难以携带或使用的。" +
            "<br><br>" +
            "(D) '笨拙的' 意味着（一个人或动作）笨拙的；笨拙的。"
    },
    {
        id: 4,
        question: "The school implemented __________ rules regarding attendance and punctuality, leaving no room for leniency.",
        chinese_question: "学校实施了 __________ 的出勤和准时规定，毫不宽容。",
        answers: [
            { option: "A", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "C", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stringent' means strict, precise, and exacting." +
            "<br><br>" +
            "(B) 'lenient' means permissive, merciful, or tolerant." +
            "<br><br>" +
            "(C) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking; able to be easily modified to respond to altered circumstances.",
        chinese_explanation: "(A) '严格的' 意味着严格、精确和要求严格的。" +
            "<br><br>" +
            "(B) '宽容的' 意味着宽松、仁慈或宽容的。" +
            "<br><br>" +
            "(C) '松懈的' 意味着不够严格、严厉或仔细的。" +
            "<br><br>" +
            "(D) '灵活的' 意味着能够在不破坏的情况下轻松弯曲；能够轻松修改以应对改变的情况。"
    },
    {
        id: 5,
        question: "His __________ attitude annoyed everyone, as he constantly preached about his moral superiority.",
        chinese_question: "他 __________ 的态度惹恼了每个人，因为他不断炫耀自己的道德优越感。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "sanctimonious", chinese_answer: "假装虔诚的", chinese_romanization: "jiǎzhuāng qiánchéng de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "unassuming", chinese_answer: "不自以为是的", chinese_romanization: "bù zìyǐwéishì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sanctimonious' means making a show of being morally superior to other people." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'unassuming' means not pretentious or arrogant; modest.",
        chinese_explanation: "(B) '假装虔诚的' 意味着表现出道德优越于他人的样子。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(D) '不自以为是的' 意味着不自负或傲慢的；谦虚的。"
    },
    {
        id: 6,
    question: "The politician's __________ behavior of constant lies and manipulation disgusted even his supporters.",
    chinese_question: "这位政客的 __________ 行为，经常撒谎和操纵，甚至让他的支持者也感到厌恶。",
    answers: [
        { option: "A", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìngrén qīnpèi de" },
        { option: "B", answer: "respectable", chinese_answer: "受人尊敬的", chinese_romanization: "shòurén zūnjìng de" },
        { option: "C", answer: "nauseating", chinese_answer: "令人作呕的", chinese_romanization: "lìngrén zuò'ǒu de" },
        { option: "D", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhídé chēngzàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nauseating' means causing a feeling of nausea or disgust." +
        "<br><br>" +
        "(A) 'admirable' means arousing or deserving respect and approval." +
        "<br><br>" +
        "(B) 'respectable' means regarded by society to be good, proper, or correct." +
        "<br><br>" +
        "(D) 'commendable' means deserving praise.",
    chinese_explanation: "(C) '令人作呕的' 意味着引起恶心或厌恶的。" +
        "<br><br>" +
        "(A) '令人钦佩的' 意味着引起或值得尊重和赞同的。" +
        "<br><br>" +
        "(B) '受人尊敬的' 意味着被社会认为是好的、适当的或正确的。" +
        "<br><br>" +
        "(D) '值得称赞的' 意味着值得称赞的。"
    },
    {
        id: 7,
    question: "The hotel was incredibly __________, with its luxurious decor, high-end amenities, and exclusive atmosphere that catered to wealthy clientele.",
    chinese_question: "这家酒店非常 __________，豪华的装饰、高端的设施和专属的氛围迎合了富裕的客户。",
    answers: [
        { option: "A", answer: "swanky", chinese_answer: "时髦奢华的", chinese_romanization: "shímáo shēhuá de" },
        { option: "B", answer: "shabby", chinese_answer: "破旧的", chinese_romanization: "pòjiù de" },
        { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "D", answer: "plain", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'swanky' means stylishly luxurious and expensive." +
        "<br><br>" +
        "(B) 'shabby' means in poor condition through long or hard use or lack of care." +
        "<br><br>" +
        "(C) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(D) 'plain' means not decorated or elaborate; simple or basic in character.",
    chinese_explanation: "(A) '时髦奢华的' 意味着风格豪华和昂贵的。" +
        "<br><br>" +
        "(B) '破旧的' 意味着由于长时间或使用不当或缺乏照料而状况不佳的。" +
        "<br><br>" +
        "(C) '谦虚的' 意味着对自己的能力或成就不夸大的。" +
        "<br><br>" +
        "(D) '简单的' 意味着不装饰或不复杂的；基本的。"
    },
    {
        id: 8,
    question: "The community was __________ for the volunteers' efforts to clean up the local park, making it a pleasant place for everyone to enjoy.",
    chinese_question: "社区对志愿者们清理当地公园的努力表示 __________，使其成为一个大家都能享受的愉快场所。",
    answers: [
        { option: "A", answer: "dismissive", chinese_answer: "轻视的", chinese_romanization: "qīngshì de" },
        { option: "B", answer: "grateful", chinese_answer: "感激的", chinese_romanization: "gǎnjī de" },
        { option: "C", answer: "ungrateful", chinese_answer: "不感恩的", chinese_romanization: "bù gǎn'ēn de" },
        { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'grateful' means feeling or showing an appreciation of kindness; thankful." +
        "<br><br>" +
        "(A) 'dismissive' means feeling or showing that something is unworthy of consideration." +
        "<br><br>" +
        "(C) 'ungrateful' means not feeling or showing gratitude." +
        "<br><br>" +
        "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(B) '感激的' 意味着感到或表现出对善意的感激；感恩的。" +
        "<br><br>" +
        "(A) '轻视的' 意味着认为某事不值得考虑的感觉或表现。" +
        "<br><br>" +
        "(C) '不感恩的' 意味着没有感到或表现出感激之情的。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有兴趣、热情或关心的。"
    },
    {
        id: 9,
    question: "His __________ nature made him a beloved figure in the community, as he never sought attention or praise.",
    chinese_question: "他的 __________ 性格使他成为社区中受人喜爱的人物，因为他从不寻求关注或赞美。",
    answers: [
        { option: "A", answer: "ostentatious", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
        { option: "B", answer: "unassuming", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
        { option: "C", answer: "flashy", chinese_answer: "浮华的", chinese_romanization: "fúhuá de" },
        { option: "D", answer: "gaudy", chinese_answer: "艳俗的", chinese_romanization: "yànsú de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unassuming' means not pretentious or arrogant; modest." +
        "<br><br>" +
        "(A) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
        "<br><br>" +
        "(C) 'flashy' means showy in a way that attracts attention." +
        "<br><br>" +
        "(D) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless.",
    chinese_explanation: "(B) '谦逊的' 意味着不自命不凡或傲慢；谦虚的。" +
        "<br><br>" +
        "(A) '炫耀的' 意味着以粗俗或做作的展示为特征；旨在给人留下深刻印象或吸引注意。" +
        "<br><br>" +
        "(C) '浮华的' 意味着以吸引注意的方式炫耀的。" +
        "<br><br>" +
        "(D) '艳俗的' 意味着极度明亮或炫耀，通常以至于无品味。"
    },
    {
        id: 10,
    question: "After reviewing the plans, the architect concluded that the design was __________ and could be built within the timeline.",
    chinese_question: "在审查了计划后，建筑师得出结论，设计是 __________ 的，可以在时间范围内建成。",
    answers: [
        { option: "A", answer: "unfeasible", chinese_answer: "不可行", chinese_romanization: "bù kěxíng" },
        { option: "B", answer: "complicated", chinese_answer: "复杂", chinese_romanization: "fùzá" },
        { option: "C", answer: "practicable", chinese_answer: "可行", chinese_romanization: "kěxíng" },
        { option: "D", answer: "theoretical", chinese_answer: "理论", chinese_romanization: "lǐlùn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'practicable' means capable of being done or put into practice successfully." +
        "<br><br>" +
        "(A) 'unfeasible' means not capable of being done or carried out." +
        "<br><br>" +
        "(B) 'complicated' means consisting of many interconnecting parts or elements." +
        "<br><br>" +
        "(D) 'theoretical' means based on theory rather than practical application.",
    chinese_explanation: "(C) “可行” 意味着能够成功地完成或付诸实践。" +
        "<br><br>" +
        "(A) '不可行' 意味着不能完成或执行。" +
        "<br><br>" +
        "(B) '复杂' 意味着由许多相互连接的部分或元素组成。" +
        "<br><br>" +
        "(D) '理论' 意味着基于理论而非实际应用。"
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
