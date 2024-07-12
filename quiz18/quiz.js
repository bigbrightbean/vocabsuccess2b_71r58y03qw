// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The survival expert taught us how to distinguish between __________ plants and those that are poisonous.",
        chinese_question: "生存专家教我们如何区分 __________ 的植物和有毒的植物。",
        answers: [
            { option: "A", answer: "inedible", chinese_answer: "不可食用的", chinese_romanization: "bùkě shíyòng de" },
            { option: "B", answer: "decorative", chinese_answer: "装饰的", chinese_romanization: "zhuāngshì de" },
            { option: "C", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" },
            { option: "D", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'edible' means fit to be eaten." +
            "<br><br>" +
            "(A) 'inedible' means not fit to be eaten." +
            "<br><br>" +
            "(B) 'decorative' means serving to make something look more attractive; ornamental." +
            "<br><br>" +
            "(D) 'toxic' means poisonous.",
        chinese_explanation: "(C) '可食用的' 意味着适合食用的。" +
            "<br><br>" +
            "(A) '不可食用的' 意味着不适合食用的。" +
            "<br><br>" +
            "(B) '装饰的' 意味着旨在使某物看起来更吸引人的；装饰的。" +
            "<br><br>" +
            "(D) '有毒的' 意味着有毒的。"
    },
    {
        id: 2,
        question: "In the story, the knight's quest took him to the castle __________, where the final battle awaited.",
        chinese_question: "在故事中，骑士的任务带他去了 __________ 的城堡，最终的战斗在那里等待着他。",
        answers: [
            { option: "A", answer: "nearby", chinese_answer: "附近", chinese_romanization: "fùjìn" },
            { option: "B", answer: "yonder", chinese_answer: "那边", chinese_romanization: "nàbiān" },
            { option: "C", answer: "here", chinese_answer: "这里", chinese_romanization: "zhèlǐ" },
            { option: "D", answer: "adjacent", chinese_answer: "相邻", chinese_romanization: "xiānglín" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yonder' means at some distance in the direction indicated; over there." +
            "<br><br>" +
            "(A) 'nearby' means close at hand; not far away." +
            "<br><br>" +
            "(C) 'here' means in, at, or to this place or position." +
            "<br><br>" +
            "(D) 'adjacent' means next to or adjoining something else.",
        chinese_explanation: "(B) '那边' 意味着在指示的方向上有一段距离；在那边。" +
            "<br><br>" +
            "(A) '附近' 意味着在近处；不远。" +
            "<br><br>" +
            "(C) '这里' 意味着在这个地方或位置。" +
            "<br><br>" +
            "(D) '相邻' 意味着紧挨着或毗邻某物。"
    },
    {
        id: 3,
    question: "The antique dealer assured the customer that the vase was __________, crafted in the Ming Dynasty and not a modern replica.",
    chinese_question: "古董商向顾客保证，这个花瓶是 __________ 的，是明代制造的，而不是现代复制品。",
    answers: [
        { option: "A", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
        { option: "B", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
        { option: "C", answer: "genuine", chinese_answer: "真品", chinese_romanization: "zhēnpǐn" },
        { option: "D", answer: "replica", chinese_answer: "复制品", chinese_romanization: "fùzhìpǐn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(A) 'fake' means not genuine; counterfeit." +
        "<br><br>" +
        "(B) 'contemporary' means living or occurring at the same time." +
        "<br><br>" +
        "(D) 'replica' means an exact copy or model of something, especially one on a smaller scale.",
    chinese_explanation: "(C) '真品' 意味着真正的；真实的。" +
        "<br><br>" +
        "(A) '假的' 意味着不真实的；伪造的。" +
        "<br><br>" +
        "(B) '当代的' 意味着同时代的或发生在同一时间的。" +
        "<br><br>" +
        "(D) '复制品' 意味着某物的精确副本或模型，尤其是按较小的比例。"
    },
    {
        id: 4,
    question: "Her __________ attitude towards her parents caused a lot of tension in the household, as she often talked back and refused to follow rules.",
    chinese_question: "她对父母的 __________ 态度在家中引起了很多紧张，因为她经常顶嘴并拒绝遵守规则。",
    answers: [
        { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
        { option: "B", answer: "deferential", chinese_answer: "恭敬的", chinese_romanization: "gōngjìng de" },
        { option: "C", answer: "insolent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
        { option: "D", answer: "compliant", chinese_answer: "遵从的", chinese_romanization: "zūncóng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'insolent' means showing a rude and arrogant lack of respect." +
        "<br><br>" +
        "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
        "<br><br>" +
        "(B) 'deferential' means showing respect or deference." +
        "<br><br>" +
        "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree.",
    chinese_explanation: "(C) '无礼的' 意味着表现出粗鲁和傲慢的缺乏尊重。" +
        "<br><br>" +
        "(A) '顺从的' 意味着遵守或愿意遵守命令或请求的；服从他人意志的。" +
        "<br><br>" +
        "(B) '恭敬的' 意味着表现出尊重或敬意的。" +
        "<br><br>" +
        "(D) '遵从的' 意味着倾向于同意他人或遵守规则的，尤其是过度程度上的。"
    },
    {
        id: 5,
    question: "The new policy has proven to be __________, leading to numerous complaints and unintended consequences.",
    chinese_question: "新政策被证明是 __________ 的，导致了大量的投诉和意外后果。",
    answers: [
        { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
        { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
        { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liáodāng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty." +
        "<br><br>" +
        "(A) 'beneficial' means resulting in good; favorable or advantageous." +
        "<br><br>" +
        "(B) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(D) 'straightforward' means uncomplicated and easy to do or understand.",
    chinese_explanation: "(C) '有问题的' 意味着构成或呈现问题或困难的。" +
        "<br><br>" +
        "(A) '有益的' 意味着带来好的结果；有利的或有益的。" +
        "<br><br>" +
        "(B) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(D) '直截了当的' 意味着不复杂的，容易做或理解的。"
    },
    {
        id: 6,
        question: "In today's digital age, social media platforms are __________, influencing many aspects of our lives.",
        chinese_question: "在当今的数字时代，社交媒体平台 __________，影响着我们生活的许多方面。",
        answers: [
            { option: "A", answer: "uncommon", chinese_answer: "不常见的", chinese_romanization: "bù chángjiàn de" },
            { option: "B", answer: "exceptional", chinese_answer: "特殊的", chinese_romanization: "tèshū de" },
            { option: "C", answer: "ubiquitous", chinese_answer: "无处不在的", chinese_romanization: "wúchù bùzài de" },
            { option: "D", answer: "infrequent", chinese_answer: "不频繁的", chinese_romanization: "bù pínfán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ubiquitous' means present, appearing, or found everywhere." +
            "<br><br>" +
            "(A) 'uncommon' means out of the ordinary; unusual." +
            "<br><br>" +
            "(B) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(D) 'infrequent' means not occurring often.",
        chinese_explanation: "(C) '无处不在的' 意味着存在、出现或发现于任何地方。" +
            "<br><br>" +
            "(A) '不常见的' 意味着不同寻常的；不常见的。" +
            "<br><br>" +
            "(B) '特殊的' 意味着异常好的；杰出的。" +
            "<br><br>" +
            "(D) '不频繁的' 意味着不经常发生的。"
    },
    {
        id: 7,
    question: "At the __________ time, we are unable to offer you a position.",
    chinese_question: "在 __________ 时，我们无法为您提供职位。",
    answers: [
        { option: "A", answer: "present", chinese_answer: "目前", chinese_romanization: "mùqián" },
        { option: "B", answer: "previous", chinese_answer: "以前", chinese_romanization: "yǐqián" },
        { option: "C", answer: "forthcoming", chinese_answer: "即将到来", chinese_romanization: "jíjiāng dàolái" },
        { option: "D", answer: "eventual", chinese_answer: "最终", chinese_romanization: "zuìzhōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'present' means existing or occurring now." +
        "<br><br>" +
        "(B) 'previous' means existing or occurring before in time or order." +
        "<br><br>" +
        "(C) 'forthcoming' means planned for or about to happen in the near future." +
        "<br><br>" +
        "(D) 'eventual' means occurring at the end of or as a result of a process or period of time.",
    chinese_explanation: "(A) '目前' 意味着现在存在或发生。" +
        "<br><br>" +
        "(B) '以前' 意味着时间或顺序上存在或发生的。" +
        "<br><br>" +
        "(C) '即将到来' 意味着计划或即将在不久的将来发生。" +
        "<br><br>" +
        "(D) '最终' 意味着在过程或一段时间结束时发生。"
    },
    {
        id: 8,
        question: "His __________ expression after winning the debate annoyed many of his classmates.",
        chinese_question: "他在辩论胜利后的 __________ 表情让许多同学感到厌烦。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "smug", chinese_answer: "自鸣得意的", chinese_romanization: "zìmíngdéyì de" },
            { option: "C", answer: "modest", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "gracious", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'smug' means having or showing an excessive pride in oneself." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities." +
            "<br><br>" +
            "(D) 'gracious' means courteous, kind, and pleasant.",
        chinese_explanation: "(B) '自鸣得意的' 意味着对自己有过度的自豪。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的重要性有谦虚或低估。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的能力不自夸。" +
            "<br><br>" +
            "(D) '和蔼的' 意味着有礼貌、友好和愉快的。"
    },
    {
        id: 9,
    question: "Her taste in art and music was remarkably __________, reflecting years of study and a deep appreciation for classical works.",
    chinese_question: "她在艺术和音乐方面的品味非常 __________，反映了多年的学习和对古典作品的深刻欣赏。",
    answers: [
        { option: "A", answer: "refined", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
        { option: "B", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
        { option: "C", answer: "coarse", chinese_answer: "粗俗的", chinese_romanization: "cūsú de" },
        { option: "D", answer: "unpolished", chinese_answer: "未经打磨的", chinese_romanization: "wèijīng dǎmó de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'refined' means elegant and cultured in appearance, manner, or taste." +
        "<br><br>" +
        "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
        "<br><br>" +
        "(C) 'coarse' means rough or harsh in texture." +
        "<br><br>" +
        "(D) 'unpolished' means not refined or elegant.",
    chinese_explanation: "(A) '精致的' 意味着在外观、举止或品味上优雅和有教养的。" +
        "<br><br>" +
        "(B) '粗糙的' 意味着处于自然或未加工状态的；尚未加工或精炼的。" +
        "<br><br>" +
        "(C) '粗俗的' 意味着质地粗糙或粗糙的。" +
        "<br><br>" +
        "(D) '未经打磨的' 意味着不精致或优雅的。"
    },
    {
        id: 10,
    question: "His __________ views on social issues often clashed with the progressive ideas of his peers.",
    chinese_question: "他对社会问题的__________观点经常与同龄人的进步思想发生冲突。",
    answers: [
        { option: "A", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" },
        { option: "B", answer: "reactionary", chinese_answer: "反动的", chinese_romanization: "fǎndòng de" },
        { option: "C", answer: "forward-thinking", chinese_answer: "前瞻的", chinese_romanization: "qiánzhān de" },
        { option: "D", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reactionary' means opposing political or social progress or reform." +
        "<br><br>" +
        "(A) 'progressive' means favoring or advocating progress, change, improvement, or reform, as opposed to wishing to maintain things as they are, especially in political matters." +
        "<br><br>" +
        "(C) 'forward-thinking' means favoring innovation and development; progressive." +
        "<br><br>" +
        "(D) 'liberal' means open to new behavior or opinions and willing to discard traditional values.",
    chinese_explanation: "(B) '反动的'一词意味着反对政治或社会进步或改革的。" +
        "<br><br>" +
        "(A) '进步的' 意味着支持或提倡进步、变革、改善或改革的，而不是希望维持现状的，尤其在政治事务上。" +
        "<br><br>" +
        "(C) '前瞻的' 意味着支持创新和发展的；进步的。" +
        "<br><br>" +
        "(D) '自由的' 意味着愿意接受新的行为或观点并愿意抛弃传统价值观的。"
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
