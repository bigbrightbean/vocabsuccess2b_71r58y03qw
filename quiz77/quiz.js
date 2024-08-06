// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His reputation as a __________ was well-earned; he never hesitated to challenge the status quo.",
    chinese_question: "他作为一个 __________ 的名声是实至名归的；他从不犹豫挑战现状。",
    answers: [
        { option: "A", answer: "maverick", chinese_answer: "特立独行者", chinese_romanization: "tèlìdúxíngzhě" },
        { option: "B", answer: "conformist", chinese_answer: "循规蹈矩者", chinese_romanization: "xúnguīdǎojǔzhě" },
        { option: "C", answer: "imitator", chinese_answer: "模仿者", chinese_romanization: "mófǎng zhě" },
        { option: "D", answer: "conservative", chinese_answer: "保守派", chinese_romanization: "bǎoshǒu pài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'maverick' means an independent-minded person who does not conform to accepted norms." +
        "<br><br>" +
        "(B) 'conformist' means a person who conforms to accepted behavior or established practices." +
        "<br><br>" +
        "(C) 'imitator' means a person who copies the behavior or actions of another." +
        "<br><br>" +
        "(D) 'conservative' means a person who is averse to change and holds traditional values.",
    chinese_explanation: "(A) '特立独行者' 意味着一个独立思考、不遵守既定规范的人。" +
        "<br><br>" +
        "(B) '循规蹈矩者' 意味着一个遵循接受行为或既定做法的人。" +
        "<br><br>" +
        "(C) '模仿者' 意味着一个模仿他人行为或行动的人。" +
        "<br><br>" +
        "(D) '保守派' 意味着一个厌恶改变并持有传统价值观的人。"
    },
    {
        id: 2,
    question: "A core __________ of their philosophy is to treat others with respect and kindness at all times.",
    chinese_question: "他们哲学的核心 __________ 是始终以尊重和善意对待他人。",
    answers: [
        { option: "A", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" },
        { option: "B", answer: "fabrication", chinese_answer: "捏造", chinese_romanization: "niēzào" },
        { option: "C", answer: "aberration", chinese_answer: "偏离", chinese_romanization: "piānlí" },
        { option: "D", answer: "behavior", chinese_answer: "行为", chinese_romanization: "xíngwéi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'principle' figuratively means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning." +
        "<br><br>" +
        "(B) 'fabrication' means the action or process of manufacturing or inventing something." +
        "<br><br>" +
        "(C) 'aberration' means a departure from what is normal, usual, or expected, typically an unwelcome one." +
        "<br><br>" +
        "(D) 'behavior' means the way in which one acts or conducts oneself, especially toward others.",
    chinese_explanation: "(A) '原则' 在此语境下意指作为信仰或行为体系或推理链基础的基本真理或命题。" +
        "<br><br>" +
        "(B) '捏造' 意味着制造或发明某物的行为或过程。" +
        "<br><br>" +
        "(C) '偏离' 意味着偏离正常、通常或预期的状态，通常是不受欢迎的。" +
        "<br><br>" +
        "(D) '行为' 意味着一个人的行为或举止，尤其是对待他人的方式。"
    },
    {
        id: 3,
        question: "The economic __________ offered his insights on the potential impacts of the new tax policy during the television interview.",
        chinese_question: "这位经济 __________ 在电视采访中提供了对新税收政策潜在影响的见解。",
        answers: [
                { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "C", answer: "learner", chinese_answer: "学习者", chinese_romanization: "xuéxí zhě" },
                { option: "D", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
                "<br><br>" +
                "(A) 'novice' means a person new to or inexperienced in a field or situation." +
                "<br><br>" +
                "(C) 'learner' means a person who is learning a subject or skill." +
                "<br><br>" +
                "(D) 'spectator' means a person who watches at a show, game, or other event.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
                "<br><br>" +
                "(A) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
                "<br><br>" +
                "(C) '学习者' 意味着正在学习某个学科或技能的人。" +
                "<br><br>" +
                "(D) '观众' 意味着在演出、比赛或其他活动中观看的人。"
    },
    {
        id: 4,
    question: "The daily __________ of brushing your teeth helps maintain good oral hygiene.",
    chinese_question: "每天刷牙的 __________ 有助于保持良好的口腔卫生。",
    answers: [
        { option: "A", answer: "routine", chinese_answer: "例行程序", chinese_romanization: "lìxíng chéngxù" },
        { option: "B", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
        { option: "D", answer: "adventure", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'routine' means a sequence of actions regularly followed; a fixed program." +
        "<br><br>" +
        "(B) 'chaos' means complete disorder and confusion." +
        "<br><br>" +
        "(C) 'incident' means an event or occurrence." +
        "<br><br>" +
        "(D) 'adventure' means an unusual and exciting, typically hazardous, experience or activity.",
    chinese_explanation: "(A) '例行程序' 意味着定期遵循的一系列行动；固定程序。" +
        "<br><br>" +
        "(B) '混乱' 意味着完全的混乱和困惑。" +
        "<br><br>" +
        "(C) '事件' 意味着一个事件或发生的事情。" +
        "<br><br>" +
        "(D) '冒险' 意味着一种不同寻常的令人兴奋的，通常是危险的经历或活动。"
    },
    {
        id: 5,
        question: "His __________ of basic cooking skills allowed him to prepare meals for himself when living alone.",
        chinese_question: "他 __________ 了基本的烹饪技能，使他在独居时能够自己准备饭菜。",
        answers: [
            { option: "A", answer: "loss", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acquisition' figuratively means the act of obtaining or gaining possession, especially knowledge or skills." +
            "<br><br>" +
            "(A) 'loss' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(D) 'neglect' means the state or fact of being uncared for.",
        chinese_explanation: "(C) '获得' 在此语境下意指获取或获得所有权的行为，特别是知识或技能。" +
            "<br><br>" +
            "(A) '失去' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(B) '拒绝' 意味着对提议、想法等的拒绝或拒绝。" +
            "<br><br>" +
            "(D) '忽视' 意味着无人照顾的状态或事实。"
    },
    {
        id: 6,
    question: "The movie depicted the protagonist's gradual __________ into a life of excess and moral corruption.",
    chinese_question: "电影描绘了主人公逐渐 __________ 的过程，陷入奢侈和道德腐败的生活。",
    answers: [
        { option: "A", answer: "debauch", chinese_answer: "堕落", chinese_romanization: "duòluò" },
        { option: "B", answer: "redemption", chinese_answer: "救赎", chinese_romanization: "jiùshú" },
        { option: "C", answer: "reflection", chinese_answer: "反思", chinese_romanization: "fǎnsī" },
        { option: "D", answer: "improvement", chinese_answer: "改进", chinese_romanization: "gǎijìn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'debauch' means to destroy or debase the moral purity of; corrupt. It also means to indulge in sensual pleasures, typically involving excessive drinking and promiscuity." +
        "<br><br>" +
        "(B) 'redemption' means the action of saving or being saved from sin, error, or evil." +
        "<br><br>" +
        "(C) 'reflection' means serious thought or consideration." +
        "<br><br>" +
        "(D) 'improvement' means the process of making something better.",
    chinese_explanation: "(A) '堕落' 意味着摧毁或贬低道德纯洁性；腐败。它还意味着沉迷于感官享受，通常涉及酗酒和淫乱。" +
        "<br><br>" +
        "(B) '救赎' 意味着从罪恶、错误或邪恶中拯救或被拯救的行为。" +
        "<br><br>" +
        "(C) '反思' 意味着认真思考或考虑。" +
        "<br><br>" +
        "(D) '改进' 意味着使某事物变得更好的过程。"
    },
    {
        id: 7,
    question: "He approached the problem with the thoroughness and curiosity of a __________ by researching extensively and asking detailed questions.",
    chinese_question: "他以学者的细致和好奇心处理问题，通过广泛研究和提出详细问题。",
    answers: [
        { option: "A", answer: "athlete", chinese_answer: "运动员", chinese_romanization: "yùndòngyuán" },
        { option: "B", answer: "artist", chinese_answer: "艺术家", chinese_romanization: "yìshùjiā" },
        { option: "C", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" },
        { option: "D", answer: "musician", chinese_answer: "音乐家", chinese_romanization: "yīnyuèjiā" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'scholar' means a specialist in a particular branch of study, especially the humanities; a distinguished academic. Figuratively, it can mean someone who is very knowledgeable and thorough in their approach." +
        "<br><br>" +
        "(A) 'athlete' means a person who is proficient in sports and other forms of physical exercise." +
        "<br><br>" +
        "(B) 'artist' means a person who creates art, especially paintings or drawings as a profession or hobby." +
        "<br><br>" +
        "(D) 'musician' means a person who plays a musical instrument, especially as a profession, or is musically talented.",
    chinese_explanation: "(C) '学者' 一词意味着某一特定研究领域的专家，尤其是人文学科的专家；著名的学者。比喻地，它可以表示一个在他们的方法上非常有知识和彻底的人。" +
        "<br><br>" +
        "(A) '运动员' 意味着精通体育和其他形式的体育锻炼的人。" +
        "<br><br>" +
        "(B) '艺术家' 意味着创作艺术的人，尤其是以绘画或绘画为职业或爱好的人。" +
        "<br><br>" +
        "(D) '音乐家' 意味着演奏乐器的人，尤其是作为职业，或在音乐上有才华的人。"
    },
    {
        id: 8,
    question: "She couldn't hide the __________ in her voice when she spoke about her colleague's unprofessional behavior.",
    chinese_question: "当她谈到同事的不专业行为时，她无法掩饰语气中的 __________。",
    answers: [
        { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" },
        { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
        "<br><br>" +
        "(A) 'admiration' means respect and warm approval." +
        "<br><br>" +
        "(C) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
    chinese_explanation: "(B) '责备' 意味着表示不赞成或失望。" +
        "<br><br>" +
        "(A) '钦佩' 意味着尊重和热情赞同。" +
        "<br><br>" +
        "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(D) '兴奋' 意味着极大的热情和渴望。"
    },
    {
        id: 9,
        question: "He was in a __________ over whether to attend his best friend's wedding or his sister's graduation ceremony, because both events were happening on the same day.",
        chinese_question: "他陷入了 __________，不知道该参加他最好朋友的婚礼还是他妹妹的毕业典礼，因为这两个活动都在同一天举行。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "decision", chinese_answer: "决定", chinese_romanization: "juédìng" },
            { option: "C", answer: "ease", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
            { option: "D", answer: "quandary", chinese_answer: "困境", chinese_romanization: "kùnjìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'quandary' means a state of perplexity or uncertainty over what to do in a difficult situation." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being coherent and intelligible." +
            "<br><br>" +
            "(B) 'decision' means a conclusion or resolution reached after consideration." +
            "<br><br>" +
            "(C) 'ease' means absence of difficulty or effort.",
        chinese_explanation: "(D) '困境'一词意味着在面对困难情况时感到困惑或不确定的状态。" +
            "<br><br>" +
            "(A) '清晰' 意味着连贯和可理解的质量。" +
            "<br><br>" +
            "(B) '决定' 意味着经过考虑后得出的结论或决议。" +
            "<br><br>" +
            "(C) '轻松' 意味着没有困难或努力。"
    },
    {
        id: 10,
    question: "The scientist was considered a __________ in her field for challenging established theories and proposing new ones.",
    chinese_question: "这位科学家在她的领域被认为是一个 __________，因为她挑战了既定理论并提出了新的理论。",
    answers: [
        { option: "A", answer: "maverick", chinese_answer: "特立独行者", chinese_romanization: "tèlìdúxíngzhě" },
        { option: "B", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" },
        { option: "C", answer: "conformist", chinese_answer: "循规蹈矩者", chinese_romanization: "xúnguīdǎojǔzhě" },
        { option: "D", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuízhě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'maverick' figuratively means an independent-minded person who does not conform to accepted norms." +
        "<br><br>" +
        "(B) 'traditionalist' means a person who adheres to tradition, especially in cultural or religious practice." +
        "<br><br>" +
        "(C) 'conformist' means a person who conforms to accepted behavior or established practices." +
        "<br><br>" +
        "(D) 'follower' means a person who supports and admires a particular person or set of ideas.",
    chinese_explanation: "(A) '特立独行者' 在此语境下意指一个独立思考、不遵守既定规范的人。" +
        "<br><br>" +
        "(B) '传统主义者' 意味着在文化或宗教实践中坚持传统的人。" +
        "<br><br>" +
        "(C) '循规蹈矩者' 意味着一个遵循接受行为或既定做法的人。" +
        "<br><br>" +
        "(D) '追随者' 意味着支持和钦佩特定人或思想体系的人。"
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
