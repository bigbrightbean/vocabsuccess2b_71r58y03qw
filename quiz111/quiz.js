// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The environmental group __________ the company's decision to cut down trees for a new development.",
        chinese_question: "环保组织 __________ 公司为了新的开发项目砍伐树木的决定。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "decried", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decried' means to publicly denounce or criticize." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'supported' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '谴责'一词意味着公开谴责或批评。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 2,
        question: "The constant negative feedback __________ his insecurities and made him doubt his abilities.",
        chinese_question: "持续的负面反馈 __________ 了他的不安全感，使他怀疑自己的能力。",
        answers: [
            { option: "A", answer: "reinforced", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "B", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "alleviated", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforced' figuratively means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'diminished' means to make or become less." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'alleviated' means to make suffering, deficiency, or a problem less severe.",
        chinese_explanation: "(A) '加强' 在此语境下比喻加强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '减轻' 意味着使痛苦、缺陷或问题减轻。"
    },
    {
        id: 3,
        question: "The heartfelt plea __________ the community to come together and help those in need.",
        chinese_question: "真诚的请求 __________ 社区团结起来帮助有需要的人。",
        answers: [
                { option: "A", answer: "entreated", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
                { option: "B", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "divided", chinese_answer: "分裂", chinese_romanization: "fēnliè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'entreated' means to ask someone earnestly or anxiously to do something, used figuratively here." +
                "<br><br>" +
                "(B) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'divided' means to separate into parts or groups.",
        chinese_explanation: "(A) '恳求' 意味着诚恳或焦急地请求某人做某事，这里是比喻用法。" +
                "<br><br>" +
                "(B) '劝阻' 意味着使某人失去信心或热情。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '分裂' 意味着分成部分或群体。"
    },
    {
        id: 4,
    question: "The increase in sales __________ that the new marketing strategy is working.",
    chinese_question: "销售额的增加 __________ 新的营销策略正在奏效。",
    answers: [
        { option: "A", answer: "denies", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "B", answer: "suggests", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "indicates", chinese_answer: "表明", chinese_romanization: "biǎomíng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'indicates' means to show or point out." +
        "<br><br>" +
        "(A) 'denies' means to refuse to admit the truth or existence of something." +
        "<br><br>" +
        "(B) 'suggests' means to state or express indirectly." +
        "<br><br>" +
        "(C) 'ignores' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(D) '表明' 意味着显示或指出。" +
        "<br><br>" +
        "(A) '否认' 意味着拒绝承认某事的真实性或存在。" +
        "<br><br>" +
        "(B) '建议' 意味着间接地表达或陈述。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
    question: "She could clearly __________ the details of her childhood home, even after all these years.",
    chinese_question: "即使过了这么多年，她依然能清晰地 __________ 儿时家里的细节。",
    answers: [
        { option: "A", answer: "recall", chinese_answer: "回忆", chinese_romanization: "huíyì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
        { option: "D", answer: "misunderstand", chinese_answer: "误解", chinese_romanization: "wùjiě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'recall' means to bring a fact, event, or situation back into one's mind; remember." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'forget' means to fail to remember." +
        "<br><br>" +
        "(D) 'misunderstand' means to interpret something wrongly.",
    chinese_explanation: "(A) '回忆' 意味着将事实、事件或情况重新带入某人的记忆中；记得。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '忘记' 意味着未能记住。" +
        "<br><br>" +
        "(D) '误解' 意味着错误地解释某事。"
    },
    {
        id: 6,
        question: "We will __________ the land before starting the construction project.",
        chinese_question: "我们将在开始建设项目之前 __________ 这片土地。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "survey", chinese_answer: "勘测", chinese_romanization: "kāncè" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'survey' means to examine and record the area and features of (an area of land) so as to construct a map, plan, or description." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'abandon' means to leave someone or something behind.",
        chinese_explanation: "(C) '勘测' 意味着检查和记录（某一地区的）区域和特征，以便绘制地图、计划或描述。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快活动来承认重要或快乐的日子或事件。" +
            "<br><br>" +
            "(D) '放弃' 意味着离开某人或某物。"
    },
    {
        id: 7,
    question: "The leader's speech __________ the crowd, leading to an unexpected protest in the streets.",
    chinese_question: "领导的演讲 __________ 了人群，导致街头出现了意想不到的抗议活动。",
    answers: [
        { option: "A", answer: "calmed", chinese_answer: "平息", chinese_romanization: "píngxī" },
        { option: "B", answer: "silenced", chinese_answer: "使安静", chinese_romanization: "shǐ ānjìng" },
        { option: "C", answer: "incited", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
        { option: "D", answer: "quelled", chinese_answer: "镇压", chinese_romanization: "zhènyā" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'incited' means encouraged or stirred up (violent or unlawful behavior)." +
        "<br><br>" +
        "(A) 'calmed' means made tranquil or quiet." +
        "<br><br>" +
        "(B) 'silenced' means caused to be quiet." +
        "<br><br>" +
        "(D) 'quelled' means put an end to (a rebellion or other disorder), typically by the use of force.",
    chinese_explanation: "(C) '煽动' 意味着鼓励或激起（暴力或非法行为）。" +
        "<br><br>" +
        "(A) '平息' 意味着使平静或安静。" +
        "<br><br>" +
        "(B) '使安静' 意味着使安静。" +
        "<br><br>" +
        "(D) '镇压' 意味着通常通过使用武力来结束（叛乱或其他混乱）。"
    },
    {
        id: 8,
    question: "His compelling speech __________ the hearts of everyone in the audience.",
    chinese_question: "他那引人入胜的演讲 __________ 了在场每个人的心。",
    answers: [
        { option: "A", answer: "released", chinese_answer: "释放", chinese_romanization: "shìfàng" },
        { option: "B", answer: "questioned", chinese_answer: "询问", chinese_romanization: "xúnwèn" },
        { option: "C", answer: "arrested", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
        { option: "D", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arrested' means to capture or hold someone's attention." +
        "<br><br>" +
        "(A) 'released' means to set free from confinement or restraint." +
        "<br><br>" +
        "(B) 'questioned' means to ask questions or interrogate." +
        "<br><br>" +
        "(D) 'avoided' means to keep away from or stop oneself from doing something.",
    chinese_explanation: "(C) '吸引' 意味着捕捉或吸引某人的注意力。" +
        "<br><br>" +
        "(A) '释放' 意味着从监禁或约束中释放。" +
        "<br><br>" +
        "(B) '询问' 意味着问问题或审问。" +
        "<br><br>" +
        "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 9,
        question: "The mystery surrounding her sudden disappearance __________ the town in a cloud of suspicion.",
        chinese_question: "她突然失踪的谜团让整个小镇笼罩在怀疑的阴云中。",
        answers: [
                { option: "A", answer: "cleared", chinese_answer: "清除", chinese_romanization: "qīngchú" },
                { option: "B", answer: "enshrouded", chinese_answer: "笼罩", chinese_romanization: "lǒngzhào" },
                { option: "C", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enshrouded' means to cover or envelop completely and hide from view." +
                "<br><br>" +
                "(A) 'cleared' means to remove an obstruction or to make clear." +
                "<br><br>" +
                "(C) 'simplified' means to make something less complex or complicated." +
                "<br><br>" +
                "(D) 'clarified' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(B) '笼罩' 意味着完全覆盖或包围，使其隐藏不见。" +
                "<br><br>" +
                "(A) '清除' 意味着移除障碍或使清晰。" +
                "<br><br>" +
                "(C) '简化' 意味着使某事变得不那么复杂或复杂化。" +
                "<br><br>" +
                "(D) '澄清' 意味着使声明或情况不那么混乱，更容易理解。"
    },
    {
        id: 10,
        question: "The success of their first product __________ the company to invest in new research and development.",
        chinese_question: "他们第一个产品的成功 __________ 公司投入新的研究和开发。",
        answers: [
            { option: "A", answer: "spurred", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "B", answer: "deterred", chinese_answer: "威慑", chinese_romanization: "wēishè" },
            { option: "C", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spurred' means to encourage or prompt someone to take action or make a greater effort." +
            "<br><br>" +
            "(B) 'deterred' means to discourage someone from doing something by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(C) 'hindered' means to create difficulties, resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '激励' 意味着鼓励或促使某人采取行动或更加努力。" +
            "<br><br>" +
            "(B) '威慑' 意味着通过灌输怀疑或对后果的恐惧来阻止某人做某事。" +
            "<br><br>" +
            "(C) '阻碍' 意味着制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
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
