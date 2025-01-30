//Test Caminho Domain
// Path: Logistica\tests\unit\domain\caminho.test.ts
// Compare this snippet from Logistica\tests\unit\domain\caminho.test.ts:
import * as sinon from 'sinon';
import { Caminho } from '../../../src/domain/caminho/Caminho';
import { Result } from '../../../src/core/logic/Result';
import ICaminhoDTO from '../../../src/dto/ICaminhoDTO';
import { describe } from 'node:test';
import { UniqueEntityID } from '../../../src/core/domain/UniqueEntityID';
import { CaminhoDistanciaArmazens } from '../../../src/domain/caminho/CaminhoDistanciaArmazens';
import { CaminhoTempoDeslocacaoMin } from '../../../src/domain/caminho/CaminhoTempoDeslocacaoMin';
import { CaminhoEnergiaNecessariaKWh } from '../../../src/domain/caminho/CaminhoEnergiaNecessariaKWh';


var sinonTest = require("sinon-test");
var test = sinonTest(sinon);
const chai = require('chai');

describe('caminho domain', function () {
    var expect = chai.expect;
    beforeEach(function () {
    });

    afterEach(function () {
    }
    );

    it('should create a valid caminho', test(function (this: typeof sinon) {
        // Arrange
        const caminhoDTO: ICaminhoDTO = {
            id: '1',
            energiaNecessariaKWh: 100,
            tempoDeslocacaoMin: 100,
            idArmazemOrigem: "1",
            idArmazemDestino: "2",
            distanciaEntreArmazens: 100
        };
        const caminhoEnergiaNecessariaOrError = CaminhoEnergiaNecessariaKWh.create(caminhoDTO.energiaNecessariaKWh);
        const caminhoTempoDeslocacaoOrError = CaminhoTempoDeslocacaoMin.create(caminhoDTO.tempoDeslocacaoMin);
        const idArmazemOrigemOrError = caminhoDTO.idArmazemOrigem;
        const idArmazemDestinoOrError = caminhoDTO.idArmazemDestino;
        const caminhoDistanciaArmazensOrError = CaminhoDistanciaArmazens.create(caminhoDTO.distanciaEntreArmazens);

        const caminhoOrError = Caminho.create({
            energiaNecessariaKWh: caminhoEnergiaNecessariaOrError.getValue(),
            tempoDeslocacaoMin: caminhoTempoDeslocacaoOrError.getValue(),
            idArmazemOrigem: idArmazemOrigemOrError,
            idArmazemDestino: idArmazemDestinoOrError,
            distanciaEntreArmazens: caminhoDistanciaArmazensOrError.getValue(),
        }, new UniqueEntityID(caminhoDTO.id));

        // Act
        const caminho = caminhoOrError.getValue();

        // Assert
        expect(caminho.energiaNecessariaKWh.value).to.be.equal(caminhoDTO.energiaNecessariaKWh);
        expect(caminho.tempoDeslocacaoMin.value).to.be.equal(caminhoDTO.tempoDeslocacaoMin);
        expect(caminho.idArmazemOrigem).to.be.equal(caminhoDTO.idArmazemOrigem);
        expect(caminho.idArmazemDestino).to.be.equal(caminhoDTO.idArmazemDestino);
        expect(caminho.distanciaEntreArmazens.value).to.be.equal(caminhoDTO.distanciaEntreArmazens);
    }));



});



