var _ = require('lodash');

var ProgrammingLanguage = require('../entity/ProgrammingLanguage');

var user = {
    id: 579523214567894,
    username: 'stub_user'
};

var assessment = {
    id: 1365479523,
    title: 'Stub Assessment',
    language: ProgrammingLanguage.JAVA,
    instructions: 'Stub instruction',
    providedCompilationUnits: [],
    compilationUnitsToSubmit: [
        // TODO Add one
    ],
    tests: [
        // TODO Add one
    ]
};

var TestValue = {

    loggedUser: cloner(user),
    assessment: cloner(assessment),
    unsavedAssessment: unsavedCloner(assessment)

};

function cloner(original) {
    return function (properties) {
        return cloneWith(original, properties);
    };
}

function unsavedCloner(original) {
    return function (properties) {
        return cloneUnsavedWith(original, properties);
    };
}

function cloneWith(original, properties) {
    var clone = _.cloneDeep(original);
    for (var prop in properties)
        clone[prop] = properties[prop];
    return clone;
}

function cloneUnsavedWith(original, properties) {
    var clone = cloneWith(original, properties);
    delete clone.id;
    return clone;
}

module.exports = TestValue;