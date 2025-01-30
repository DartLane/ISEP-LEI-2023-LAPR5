//Test Value Object CaminhoEnergyNecessariaKWh

// Path: Logistica\tests\unit\services\caminhoEnergiaNecessariaKWh.test.ts
// Compare this snippet from Logistica\tests\unit\services\caminhoDistanciaArmazens.test.ts:
// //Class Test Value Object CaminhoDistanciaArmazens
//
// //Test CaminhoDistanciaArmazens Value Object
// // Path: Logistica\tests\unit\domain\caminho\CaminhoDistanciaArmazens.test.ts
//

import { CaminhoEnergiaNecessariaKWh } from '../../../src/domain/caminho/CaminhoEnergiaNecessariaKWh';
import { Result } from '../../../src/core/logic/Result';
import * as sinon from 'sinon';

var sinonTest = require("sinon-test");
var test = sinonTest(sinon);
const chai = require('chai');

describe('caminhoEnergiaNecessariaKWh value object', function () {
    var expect = chai.expect;
    beforeEach(function () {
    });

    afterEach(function () {
        }
    );

    it('should create a valid caminhoEnergiaNecessariaKWh', test(function (this: typeof sinon) {
        // Arrange
        const caminhoEnergiaNecessariaKWhOrError = CaminhoEnergiaNecessariaKWh.create(100);

        // Act
        const caminhoEnergiaNecessariaKWh = caminhoEnergiaNecessariaKWhOrError.getValue();

        // Assert
        expect(caminhoEnergiaNecessariaKWh.value).to.be.equal(100);
    }));
});
