//Test Value Object CaminhoTempoDeslocacaoMin
// Path: Logistica\tests\unit\services\caminhoTempoDeslocacaoMin.test.ts
// Compare this snippet from Logistica\tests\unit\services\caminhoDistanciaArmazens.test.ts:
// //Class Test Value Object CaminhoDistanciaArmazens
//
// //Test CaminhoDistanciaArmazens Value Object
// // Path: Logistica\tests\unit\domain\caminho\CaminhoDistanciaArmazens.test.ts
//

import { CaminhoTempoDeslocacaoMin } from '../../../src/domain/caminho/CaminhoTempoDeslocacaoMin';
import { Result } from '../../../src/core/logic/Result';
import * as sinon from 'sinon';

var sinonTest = require("sinon-test");
var test = sinonTest(sinon);
const chai = require('chai');

describe('caminhoTempoDeslocacaoMin value object', function () {
    var expect = chai.expect;
    beforeEach(function () {
    });

    afterEach(function () {
        }
    );

    it('should create a valid caminhoTempoDeslocacaoMin', test(function (this: typeof sinon) {
        // Arrange
        const caminhoTempoDeslocacaoMinOrError = CaminhoTempoDeslocacaoMin.create(100);

        // Act
        const caminhoTempoDeslocacaoMin = caminhoTempoDeslocacaoMinOrError.getValue();

        // Assert
        expect(caminhoTempoDeslocacaoMin.value).to.be.equal(100);
    }));
});