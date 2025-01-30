//Class Test Value Object CaminhoDistanciaArmazens

//Test CaminhoDistanciaArmazens Value Object
// Path: Logistica\tests\unit\domain\caminho\CaminhoDistanciaArmazens.test.ts

import { CaminhoDistanciaArmazens } from '../../../src/domain/caminho/CaminhoDistanciaArmazens';
import { Result } from '../../../src/core/logic/Result';
import * as sinon from 'sinon';

var sinonTest = require("sinon-test");
var test = sinonTest(sinon);
const chai = require('chai');

describe('caminhoDistanciaArmazens value object', function () {
    var expect = chai.expect;
    beforeEach(function () {
    });

    afterEach(function () {
    }
    );

    it('should create a valid caminhoDistanciaArmazens', test(function (this: typeof sinon) {
        // Arrange
        const caminhoDistanciaArmazensOrError = CaminhoDistanciaArmazens.create(100);

        // Act
        const caminhoDistanciaArmazens = caminhoDistanciaArmazensOrError.getValue();

        // Assert
        expect(caminhoDistanciaArmazens.value).to.be.equal(100);
    }));
});