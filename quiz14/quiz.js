// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She was __________ in her pursuit of knowledge, always eager to learn new things.",
    chinese_question: "她对知识的追求__________，总是渴望学习新东西。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "avid", chinese_answer: "热衷的", chinese_romanization: "rèzhōng de" },
        { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "D", answer: "reluctant", chinese_answer: "勉强的", chinese_romanization: "miǎnqiǎng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'avid' means having or showing a keen interest in or enthusiasm for something. Figuratively, it can mean being very enthusiastic and eager about something." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
        "<br><br>" +
        "(D) 'reluctant' means unwilling and hesitant; disinclined.",
    chinese_explanation: "(B) '热衷的'一词意味着对某事有浓厚兴趣或热情。比喻地，它可以表示对某事非常热情和渴望。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(C) '偶尔的' 意味着不经常和不规则地发生、出现或完成。" +
        "<br><br>" +
        "(D) '勉强的' 意味着不情愿和犹豫；不愿的。"
    },
    {
        id: 2,
        question: "The CEO's __________ activities, including embezzlement and fraud, eventually led to his downfall.",
        chinese_question: "这位首席执行官的 __________ 活动，包括挪用公款和欺诈，最终导致了他的垮台。",
        answers: [
            { option: "A", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" },
            { option: "B", answer: "nefarious", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" },
            { option: "C", answer: "righteous", chinese_answer: "正义的", chinese_romanization: "zhèngyì de" },
            { option: "D", answer: "lawful", chinese_answer: "合法的", chinese_romanization: "héfǎ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nefarious' means wicked or criminal." +
            "<br><br>" +
            "(A) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(C) 'righteous' means morally right or justifiable." +
            "<br><br>" +
            "(D) 'lawful' means conforming to, permitted by, or recognized by law or rules.",
        chinese_explanation: "(B) '邪恶的' 意味着邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '道德的' 意味着与道德原则或处理这些原则的分支知识有关的。" +
            "<br><br>" +
            "(C) '正义的' 意味着在道德上正确或合理的。" +
            "<br><br>" +
            "(D) '合法的' 意味着符合、允许或被法律或规则承认的。"
    },
    {
        id: 3,
        question: "After hearing the bad news, he sat in a corner with a __________ expression, barely speaking to anyone.",
        chinese_question: "听到坏消息后，他带着 __________ 的表情坐在角落里，几乎不和任何人说话。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "happy", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "D", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'happy' means feeling or showing pleasure or contentment." +
            "<br><br>" +
            "(D) 'joyful' means feeling, expressing, or causing great pleasure and happiness.",
        chinese_explanation: "(B) '忧郁的' 意味着闷闷不乐的和脾气暴躁的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着显著的快乐和乐观。" +
            "<br><br>" +
            "(C) '高兴的' 意味着感到或表现出愉悦或满足。" +
            "<br><br>" +
            "(D) '快乐的' 意味着感到、表达或引起极大的愉悦和快乐。"
    },
    {
        id: 4,
    question: "Her __________ nature meant she focused on achievable goals, ensuring steady progress and tangible results.",
    chinese_question: "她的 __________ 性格意味着她专注于可实现的目标，确保稳步进展和切实的结果。",
    answers: [
        { option: "A", answer: "visionary", chinese_answer: "有远见的人", chinese_romanization: "yǒu yuǎnjiàn de rén" },
        { option: "B", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
        { option: "C", answer: "optimist", chinese_answer: "乐观主义者", chinese_romanization: "lèguān zhǔyì zhě" },
        { option: "D", answer: "theorist", chinese_answer: "理论家", chinese_romanization: "lǐlùn jiā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pragmatist' means a person who is guided more by practical considerations than by ideals." +
        "<br><br>" +
        "(A) 'visionary' means a person with original ideas about what the future will or could be like." +
        "<br><br>" +
        "(C) 'optimist' means a person who tends to be hopeful and confident about the future or the success of something." +
        "<br><br>" +
        "(D) 'theorist' means a person concerned with the theoretical aspects of a subject.",
    chinese_explanation: "(B) '实用主义者'一词意味着一个更多地受到实际考虑而不是理想指导的人。" +
        "<br><br>" +
        "(A) '有远见的人' 意味着对未来将会或可能会是什么样子有独特想法的人。" +
        "<br><br>" +
        "(C) '乐观主义者' 意味着一个对未来或某事的成功持有希望和信心的人。" +
        "<br><br>" +
        "(D) '理论家' 意味着一个关注某个主题的理论方面的人。"
    },
    {
        id: 5,
    question: "She felt a __________ sense of achievement after completing the task, knowing there was still more work to be done.",
    chinese_question: "完成任务后，她感到了一种 __________ 的成就感，知道还有更多的工作要做。",
    answers: [
        { option: "A", answer: "enduring", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
        { option: "B", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
        { option: "C", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
        { option: "D", answer: "lasting", chinese_answer: "长久", chinese_romanization: "chángjiǔ" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'temporary' means lasting for only a limited period of time." +
        "<br><br>" +
        "(A) 'enduring' means lasting over a period of time." +
        "<br><br>" +
        "(B) 'permanent' means lasting or intended to last indefinitely." +
        "<br><br>" +
        "(D) 'lasting' means enduring over a long period of time.",
    chinese_explanation: "(C) “暂时” 意味着只持续一段有限的时间。" +
        "<br><br>" +
        "(A) '持久' 意味着在一段时间内持续。" +
        "<br><br>" +
        "(B) '永久' 意味着持久或打算无限期持续。" +
        "<br><br>" +
        "(D) '长久' 意味着在长时间内持续。"
    },
    {
        id: 6,
    question: "The team's __________ performance in the second half of the game led to their defeat.",
    chinese_question: "球队在比赛下半场的 __________ 表现导致了他们的失败。",
    answers: [
        { option: "A", answer: "dynamic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
        { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūnyùshuì de" },
        { option: "C", answer: "vigorous", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
        { option: "D", answer: "spirited", chinese_answer: "精神饱满的", chinese_romanization: "jīngshén bǎomǎn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lethargic' means affected by lethargy; sluggish and apathetic." +
        "<br><br>" +
        "(A) 'dynamic' means characterized by constant change, activity, or progress." +
        "<br><br>" +
        "(C) 'vigorous' means strong, healthy, and full of energy." +
        "<br><br>" +
        "(D) 'spirited' means full of energy, enthusiasm, and determination.",
    chinese_explanation: "(B) '昏昏欲睡的' 意味着受到嗜睡的影响；迟钝和无精打采的。" +
        "<br><br>" +
        "(A) '充满活力的' 意味着不断变化、活动或进步的特征。" +
        "<br><br>" +
        "(C) '精力充沛的' 意味着强壮、健康和充满活力的。" +
        "<br><br>" +
        "(D) '精神饱满的' 意味着充满活力、热情和决心的。"
    },
    {
        id: 7,
    question: "Incorporating more __________ foods like spinach and quinoa into your diet can improve your overall health.",
    chinese_question: "将更多像菠菜和藜麦这样的 __________ 食物纳入饮食中，可以改善你的整体健康。",
    answers: [
        { option: "A", answer: "processed", chinese_answer: "加工的", chinese_romanization: "jiāgōng de" },
        { option: "B", answer: "nutritious", chinese_answer: "有营养的", chinese_romanization: "yǒu yíngyǎng de" },
        { option: "C", answer: "artificial", chinese_answer: "人工的", chinese_romanization: "réngōng de" },
        { option: "D", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'nutritious' means providing the substances needed for growth, health, and good condition." +
        "<br><br>" +
        "(A) 'processed' means having been subjected to a special process or treatment." +
        "<br><br>" +
        "(C) 'artificial' means made or produced by human beings rather than occurring naturally." +
        "<br><br>" +
        "(D) 'bland' means lacking strong features or characteristics and therefore uninteresting.",
    chinese_explanation: "(B) '有营养的' 意味着提供生长、健康和良好状态所需的物质。" +
        "<br><br>" +
        "(A) '加工的' 意味着经过特殊加工或处理的。" +
        "<br><br>" +
        "(C) '人工的' 意味着由人类制造或生产的，而不是自然产生的。" +
        "<br><br>" +
        "(D) '平淡的' 意味着缺乏鲜明特征或特性的，因此无趣的。"
    },
    {
        id: 8,
        question: "The fact that exercise can both energize and tire you out is quite __________.",
        chinese_question: "运动既能让你充满活力又能让你感到疲惫，这一点非常 __________。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "B", answer: "paradoxical", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "expected", chinese_answer: "预期的", chinese_romanization: "yùqī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paradoxical' means seemingly absurd or self-contradictory." +
            "<br><br>" +
            "(A) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'expected' means regarded as likely to happen.",
        chinese_explanation: "(B) '矛盾的' 意味着看似荒谬或自相矛盾的。" +
            "<br><br>" +
            "(A) '一致的' 意味着在一段时间内以同样的方式行事或完成的，尤其是为了公平或准确。" +
            "<br><br>" +
            "(C) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(D) '预期的' 意味着被认为可能发生的。"
    },
    {
        id: 9,
        question: "Her __________ approach to analyzing literature provided deep insights into classic novels.",
        chinese_question: "她 __________ 的文学分析方法为经典小说提供了深刻的见解。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "B", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
            { option: "C", answer: "scholarly", chinese_answer: "学术的", chinese_romanization: "xuéshù de" },
            { option: "D", answer: "cursory", chinese_answer: "粗略的", chinese_romanization: "cūlüè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scholarly' means involving or relating to serious academic study." +
            "<br><br>" +
            "(A) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(B) 'shallow' means of little depth." +
            "<br><br>" +
            "(D) 'cursory' means hasty and therefore not thorough or detailed.",
        chinese_explanation: "(C) '学术的' 意味着涉及或与严肃的学术研究有关的。" +
            "<br><br>" +
            "(A) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(B) '浅薄的' 意味着深度很小的。" +
            "<br><br>" +
            "(D) '粗略的' 意味着草率的，因此不彻底或不详细的。"
    },
    {
        id: 10,
        question: "Her __________ manner of speaking often made people uncomfortable, but they appreciated her honesty.",
        chinese_question: "她 __________ 的说话方式常常让人不舒服，但他们也欣赏她的诚实。",
        answers: [
            { option: "A", answer: "evasive", chinese_answer: "逃避的", chinese_romanization: "táobì de" },
            { option: "B", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "C", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'forthright' means direct and outspoken; straightforward and honest." +
            "<br><br>" +
            "(A) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly." +
            "<br><br>" +
            "(B) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; not having one obvious meaning.",
        chinese_explanation: "(C) '直率的' 意味着直接和坦率的；直截了当的。" +
            "<br><br>" +
            "(A) '逃避的' 意味着倾向于避免承诺或自我表露，特别是通过仅间接回应。" +
            "<br><br>" +
            "(B) '欺骗的' 意味着有罪或涉及欺骗的；欺骗或误导他人的。" +
            "<br><br>" +
            "(D) '模棱两可的' 意味着不止一种解释的；没有明显意义的。"
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
