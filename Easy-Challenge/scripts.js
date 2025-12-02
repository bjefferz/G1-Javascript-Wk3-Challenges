function exercise(exerciseName) {
    function printExercise() {
        return `Today's exercise: ${exerciseName}`;
    }
    return printExercise(); // Call the inner function so console.log receives the string
}

// Test cases:
console.log(exercise("Jogging"));
// Output: Today's exercise: Jogging

console.log(exercise("Lifting Weights"));
// Output: Today's exercise: Lifting Weights