// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The accountant was known for her __________ attention to detail, ensuring that all financial records were accurate.",
        chinese_question: "这位会计以她对细节的 __________ 注意而闻名，确保所有财务记录准确无误。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "scrupulous", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
            { option: "C", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scrupulous' means (of a person or process) diligent, thorough, and extremely attentive to details." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(B) '细心的' 意味着（指人或过程）勤奋、彻底并极其注意细节。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的关注或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '随意的' 意味着缺乏任何明显的组织原则的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着在做某事时未能妥善照顾的。"
    },
    {
        id: 2,
    question: "Understanding the __________ principles of mathematics is essential for solving complex problems.",
    chinese_question: "理解数学的 __________ 原理对于解决复杂问题至关重要。",
    answers: [
        { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "B", answer: "fundamental", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
        { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "D", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fundamental' means forming a necessary base or core; of central importance." +
        "<br><br>" +
        "(A) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(C) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth considering.",
    chinese_explanation: "(B) '基本的' 意味着构成必要的基础或核心；具有重要意义的。" +
        "<br><br>" +
        "(A) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(C) '次要的' 意味着在重要性、严重性或意义上较小的。" +
        "<br><br>" +
        "(D) '不重要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 3,
    question: "Her argument was __________ and failed to convince the audience.",
    chinese_question: "她的论点 __________，未能说服观众。",
    answers: [
        { option: "A", answer: "strong", chinese_answer: "强", chinese_romanization: "qiáng" },
        { option: "B", answer: "convincing", chinese_answer: "令人信服", chinese_romanization: "lìng rén xìnfú" },
        { option: "C", answer: "flimsy", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
        { option: "D", answer: "compelling", chinese_answer: "引人注目", chinese_romanization: "yǐn rén zhùmù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'flimsy' means not convincing or strong; weak." +
        "<br><br>" +
        "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
        "<br><br>" +
        "(B) 'convincing' means capable of causing someone to believe that something is true or real." +
        "<br><br>" +
        "(D) 'compelling' means evoking interest, attention, or admiration in a powerfully irresistible way.",
    chinese_explanation: "(C) '脆弱' 意味着不令人信服或强壮；弱的。" +
        "<br><br>" +
        "(A) '强' 意味着有力量移动重物或执行其他体力要求高的任务。" +
        "<br><br>" +
        "(B) '令人信服' 意味着能够使某人相信某事是真的或真实的。" +
        "<br><br>" +
        "(D) '引人注目' 意味着以强烈不可抗拒的方式唤起兴趣、注意或钦佩。"
    },
    {
        id: 4,
        question: "His __________ apology did little to convince anyone that he was truly sorry for his actions.",
        chinese_question: "他那 __________ 的道歉并不能让任何人相信他对自己的行为真的感到抱歉。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "heartfelt", chinese_answer: "真挚", chinese_romanization: "zhēnzhì" },
            { option: "C", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" },
            { option: "D", answer: "elaborate", chinese_answer: "详细", chinese_romanization: "xiángxì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perfunctory' means carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; genuine." +
            "<br><br>" +
            "(B) 'heartfelt' means showing strong feelings that are sincere." +
            "<br><br>" +
            "(D) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        chinese_explanation: "(C) '敷衍' 意味着以最小的努力或反思进行的。" +
            "<br><br>" +
            "(A) '真诚' 意味着没有虚伪或欺骗；真实的。" +
            "<br><br>" +
            "(B) '真挚' 意味着表现出强烈的真诚情感。" +
            "<br><br>" +
            "(D) '详细' 意味着涉及许多精心安排的部分或细节；设计和计划详细复杂。"
    },
    {
        id: 5,
    question: "The __________ scar on his face made him self-conscious, though others assured him it wasn't noticeable.",
    chinese_question: "他脸上的 __________ 伤疤让他感到自卑，尽管别人都说它并不明显。",
    answers: [
        { option: "A", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
        { option: "B", answer: "unsightly", chinese_answer: "难看的", chinese_romanization: "nánkàn de" },
        { option: "C", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
        { option: "D", answer: "graceful", chinese_answer: "优美的", chinese_romanization: "yōuměi de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unsightly' means unpleasant to look at; ugly." +
        "<br><br>" +
        "(A) 'attractive' means pleasing or appealing to the senses." +
        "<br><br>" +
        "(C) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
        "<br><br>" +
        "(D) 'graceful' means having or showing grace or elegance.",
    chinese_explanation: "(B) '难看的' 意味着不悦目；丑陋的。" +
        "<br><br>" +
        "(A) '吸引人的' 意味着令人愉悦或吸引感官的。" +
        "<br><br>" +
        "(C) '优雅的' 意味着在外观或举止上令人愉悦地优雅和时尚的。" +
        "<br><br>" +
        "(D) '优美的' 意味着具有或展示优雅或优雅的。"
    },
    {
        id: 6,
    question: "Her __________ stories always entertained the children, taking them to fantastical worlds with talking animals and enchanted forests.",
    chinese_question: "她 __________ 的故事总是娱乐着孩子们，带他们进入有会说话的动物和魔法森林的奇幻世界。",
    answers: [
        { option: "A", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "C", answer: "whimsical", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎng tiānkāi de" },
        { option: "D", answer: "factual", chinese_answer: "事实的", chinese_romanization: "shìshí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
        "<br><br>" +
        "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(B) 'mundane' means lacking interest or excitement; dull." +
        "<br><br>" +
        "(D) 'factual' means concerned with what is actually the case.",
    chinese_explanation: "(C) '异想天开的' 意味着玩味古怪或异想天开，特别是以一种吸引人和有趣的方式。" +
        "<br><br>" +
        "(A) '现实的' 意味着有或表现出对可以实现或期望的合理和实际的想法。" +
        "<br><br>" +
        "(B) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
        "<br><br>" +
        "(D) '事实的' 意味着关注实际情况的。"
    },
    {
        id: 7,
        question: "Despite the __________ design of the building, with its plain and unremarkable appearance, it served its functional purpose well, providing a safe and efficient workspace.",
        chinese_question: "尽管这座建筑的设计 __________，外观平淡无奇，但它很好地发挥了功能作用，提供了一个安全和高效的工作空间。",
        answers: [
            { option: "A", answer: "elaborate", chinese_answer: "精心的", chinese_romanization: "jīngxīn de" },
            { option: "B", answer: "pedestrian", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
            { option: "D", answer: "intricate", chinese_answer: "复杂的", chinese_romanization: "fùzá de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedestrian' means lacking inspiration or excitement; dull." +
            "<br><br>" +
            "(A) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning." +
            "<br><br>" +
            "(C) 'innovative' means featuring new methods; advanced and original." +
            "<br><br>" +
            "(D) 'intricate' means very complicated or detailed.",
        chinese_explanation: "(B) '乏味的' 意味着缺乏灵感或兴奋的；枯燥的。" +
            "<br><br>" +
            "(A) '精心的' 意味着涉及许多精心安排的部分或细节的；在设计和计划上详细和复杂的。" +
            "<br><br>" +
            "(C) '创新的' 意味着具有新方法的；先进的和原创的。" +
            "<br><br>" +
            "(D) '复杂的' 意味着非常复杂或详细的。"
    },
    {
        id: 8,
        question: "Due to the __________ supervision of the workers, many errors went unnoticed and uncorrected, leading to significant delays in the project.",
        chinese_question: "由于对工人的 __________ 监督，许多错误未被发现和纠正，导致项目显著延误。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "B", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "C", answer: "attentive", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
            { option: "D", answer: "slack", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'slack' means showing a lack of activity or diligence; negligent." +
            "<br><br>" +
            "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(C) 'attentive' means paying close attention to something.",
        chinese_explanation: "(D) '松懈的' 意味着表现出缺乏活动或勤奋；疏忽的。" +
            "<br><br>" +
            "(A) '勤奋的' 意味着在工作或职责上有或表现出关心和认真。" +
            "<br><br>" +
            "(B) '彻底的' 意味着在每个细节上都是完整的；不是表面的或部分的。" +
            "<br><br>" +
            "(C) '细心的' 意味着密切关注某事。"
    },
    {
        id: 9,
        question: "His __________ nature made him a successful entrepreneur, as he always found ways to cut costs without compromising quality.",
        chinese_question: "他的 __________ 性格使他成为一名成功的企业家，因为他总是找到降低成本的方法而不降低质量。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "B", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "D", answer: "spendthrift", chinese_answer: "挥霍的", chinese_romanization: "huīhuò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(B) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(D) 'spendthrift' means a person who spends money in an extravagant, irresponsible way.",
        chinese_explanation: "(C) '节俭的' 意味着小心和不浪费地使用金钱和其他资源。" +
            "<br><br>" +
            "(A) '奢侈的' 意味着在花钱或使用资源方面缺乏节制。" +
            "<br><br>" +
            "(B) '奢华的' 意味着华丽的、精致的或奢侈的。" +
            "<br><br>" +
            "(D) '挥霍的' 意味着一个人以奢侈、不负责任的方式花钱。"
    },
    {
        id: 10,
        question: "The rescue team knew it was __________ to search for survivors in the stormy sea, but they had to try anyway.",
        chinese_question: "救援队知道在暴风雨的大海中寻找幸存者是 __________ 的，但他们还是不得不尝试。",
        answers: [
            { option: "A", answer: "rewarding", chinese_answer: "有回报的", chinese_romanization: "yǒu huíbào de" },
            { option: "B", answer: "futile", chinese_answer: "无用的", chinese_romanization: "wúyòng de" },
            { option: "C", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "D", answer: "promising", chinese_answer: "有前途的", chinese_romanization: "yǒu qiántú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'futile' means incapable of producing any useful result; pointless." +
            "<br><br>" +
            "(A) 'rewarding' means providing satisfaction; gratifying." +
            "<br><br>" +
            "(C) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(D) 'promising' means showing signs of future success.",
        chinese_explanation: "(B) '无用的' 意味着不能产生任何有用的结果；无意义的。" +
            "<br><br>" +
            "(A) '有回报的' 意味着提供满足感；令人满意的。" +
            "<br><br>" +
            "(C) '必要的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(D) '有前途的' 意味着显示出未来成功的迹象。"
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
