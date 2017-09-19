/*global
level
*/

define(["js/properties"], function(properties) {

    return {

        imageValuesEquivalent(imageValue1, imageValue2) {
            const imageEquivalent = function imageEquivalent(imageValue) {
                let matchedImageProperty;
                if (imageValue === properties.FIXED_TIC) { matchedImageProperty = properties.TIC; }
                if (imageValue === properties.FIXED_TAC) { matchedImageProperty = properties.TAC; }
                if (imageValue === properties.TIC) { matchedImageProperty = properties.FIXED_TIC; }
                if (imageValue === properties.TAC) { matchedImageProperty = properties.FIXED_TAC; }
                return matchedImageProperty;
            };
            let equivalent =
                (imageValue1 === imageValue2) ||
                (
                    (imageValue1 === imageEquivalent(imageValue2)) ||
                    (imageValue2 === imageEquivalent(imageValue1))
                );
            return equivalent;
        },

        generateImagePath(imageIndex) {
            return properties.SQUARE_IMAGES_FOLDER + level.images[imageIndex] + properties.SQUARE_IMAGES_EXTENSION;
        },

        getPosition(imageId) {
            var position = [];
            let match = properties.IMAGE_ID.exec(imageId);
            while (match) {
                position = [Number(match[1]), Number(match[2])];
                match = properties.IMAGE_ID.exec(imageId);
            }
            return position;
        },

        nextImage(imageId) {
            return (imageId + 1) % properties.NUMBER_CHANGEABLE_IMAGES;
        },

        pinnableImage(imageId) {
            return (imageId === properties.TIC) || (imageId === properties.TAC);
        }

    };
});